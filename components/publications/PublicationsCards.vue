<template>
  <v-row
    justify="end"
    style="max-height: 500px; overflow-x: hidden; overflow-y: auto"
  >
    <v-col v-for="publication in publications" :key="publication.id" cols="12">
      <v-card @click="show(publication)">
        <v-card-title
          class="primary darken-2 white--text"
          style="word-break: break-word"
        >
          {{ publication.titulo }}
        </v-card-title>
        <v-card-text class="mt-5">
          <div class="flex column">
            <div class="flex py-2">
              <strong>Autor:&nbsp;</strong>
              <span>{{ publication.autor }}</span>
            </div>
            <div class="flex py-2">
              <strong>Área:&nbsp;</strong>
              <span>{{ publication.area }}</span>
            </div>
            <div class="flex py-2">
              <strong>Ano:&nbsp;</strong>
              <span>{{ publication.ano }}</span>
            </div>
            <div class="flex py-2">
              <strong>Visualizar:&nbsp;</strong>
              <a v-if="publication.file_url !== null" class="blue--text">
                Link
              </a>
              <span v-else>Arquivo indisponível</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PublicationsCards',
  props: {
    publications: {
      default: () => [],
      type: Array,
    },
  },
  methods: {
    show(publication) {
      if (publication.file_url !== null) {
        window.open(`/publicacoes/${publication.id}`, '_blank');
      }
    },
  },
};
</script>
