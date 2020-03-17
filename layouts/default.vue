<template>
  <v-app style="overflow: hidden">
    <v-app-bar
      v-if="$vuetify.breakpoint.smAndDown"
      color="primary"
      app
      fixed
      dark
    >
      <v-toolbar-content>
        <div class="flex align-center">
          <v-btn
            dark
            color="white"
            class="primary--text"
            small
            @click="sidebar = !sidebar"
          >
            <v-icon left>mdi-menu</v-icon>
            Menu
          </v-btn>
        </div>
      </v-toolbar-content>
      <div class="flex justify-center font-weight-bold toolbar-title">
        <span>Repositório CONNEPI</span>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebar"
      app
      fixed
      dark
      color="primary darken-3"
      :permanent="$vuetify.breakpoint.mdAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      height="100%"
      src="/images/sidebar-background.png"
    >
      <v-list-item class="my-5" @click="$router.push({ name: 'Home' })">
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">
            <v-avatar size="40" color="white">
              <v-img src=" /images/ifal-fav.png" />
            </v-avatar>
            <span class="ml-2" style="font-family: 'Raleway', sans-serif">
              Repositório CONNEPI
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item
          v-for="({ label, icon, route }, i) in items"
          :key="i"
          active-class="green darken-2"
          link
          :to="route"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="white--text">
            <v-list-item-title>{{ label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content :class="{ 'app-content': $vuetify.breakpoint.smAndUp }">
      <router-view />
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        color="grey darken-1"
        dark
        fixed
        fab
        bottom
        right
        @click="$vuetify.goTo(0)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-content>
    <snackbar />
  </v-app>
</template>

<script lang="ts">
import Snackbar from '@/components/base/Snackbar.vue';
import isAuthenticated from '@/utils/is-authenticated';

export default {
  name: 'App',
  components: {
    Snackbar,
  },
  data: () => ({
    sidebar: true,
    items: [
      { label: 'Publicações', icon: 'mdi-file-outline', route: '/' },
      { label: 'Sobre', icon: 'mdi-script-text-outline', route: '/sobre' },
      {
        label: 'Coleções',
        icon: 'mdi-folder-multiple-outline',
        route: '/comunidades-e-colecoes',
      },
      {
        label: 'Downloads',
        icon: 'mdi-folder-download-outline',
        route: '/downloads',
      },
      { label: 'Estatísticas', icon: 'mdi-chart-line', route: '/dashboard' },
      { label: 'Gerenciar', icon: 'mdi-account-tie', route: '/gerenciar' },
    ],
  }),
  created() {
    if (this.$vuetify.breakpoint.xs) {
      this.sidebar = false;
    }
  },
  methods: {
    isAuthenticated,
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
.app-content {
  margin: 50px 30px;
  max-width: 100%;
}
.toolbar-title {
  max-width: calc(100% - 118px);
}
</style>
