<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import store from './_store';

export default {
  name: 'ThePageContainer',
  created() {
    const STORE_KEY = '$_page';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  }
};
</script>

<style></style>
