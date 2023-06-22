<template>
  <div>
    <TheHeader />
    temp
    <Filler />
    temp
    <Filler />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './_store';
import Filler from './_components/Filler';
import TheHeader from '../page/_components/TheHeader';
import Footer from './_components/Footer';

export default {
  name: 'index',
  methods: {
    ...mapActions('$_project', ['resetBaseState'])
  },
  components: {
    Footer,
    Filler,
    TheHeader
  },
  async created() {
    const STORE_KEY = '$_project';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
    try {
      // await this.fetchProjects();
    } catch (e) {
      throw e;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.resetBaseState();
    next();
  },

  beforeRouteLeave(to, from, next) {
    this.resetBaseState();
    next();
  }
};
</script>

<style scoped></style>
