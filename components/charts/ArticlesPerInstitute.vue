<template>
  <v-card class="my-2" elevation="0">
    <v-card-text>
      <v-container>
        <v-layout column>
          <h2
            class="mt-2 mb-4 title font-weight-bold"
            :class="{ 'text-center': $vuetify.breakpoint.xs }"
          >
            Total de publicações por IF
          </h2>
          <ve-bar
            height="600px"
            :data="chart"
            :settings="chartSettings"
            :after-config="afterConfig"
          />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: 'ArticlesPerInstitute',
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    this.chartSettings = {
      label: {
        normal: { show: true, position: 'right' },
      },
    };
    return {
      chart: {
        columns: ['instituicao', 'publicacoes'],
        rows: [],
      },
    };
  },
  watch: {
    chartData(val) {
      this.chart.rows = orderBy(val, ['instituicao']);
    },
  },
  methods: {
    afterConfig(options) {
      options.tooltip.position = this.$vuetify.breakpoint.xs
        ? (pt) => ['0%', pt[1]]
        : options.tooltip.position;
      return options;
    },
  },
};
</script>
