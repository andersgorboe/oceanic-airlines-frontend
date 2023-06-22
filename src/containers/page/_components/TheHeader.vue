<template>
  <section>
    <v-app-bar app flat color="#203e5f" dark>
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = true" />
      <v-toolbar-title class="logo display-1">
        Oceanic Airlines
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only"> </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link @click="goToProjects">
          <v-list-item-action>
            <v-icon>apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TestTitle</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>
<script>
export default {
  name: 'TheHeader',

  data: () => ({
    drawer: false
  }),
  methods: {
    goToTimeline() {
      this.$router.push({ name: 'cv', hash: '#tidslinje' });
    }
  }
};
</script>

<style>
.logo {
  font-family: 'Roboto', sans-serif;
}
.logo:hover {
  cursor: pointer;
}
.menu-link {
  text-transform: none !important;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: normal;
  line-height: 21px;
}
</style>
