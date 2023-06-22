<template>
  <div>
    <TheHeader />
    <BookingOverview />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './_store';
import TheHeader from '../page/_components/TheHeader';
import Footer from './_components/Footer';
import BookingOverview from "./_components/BookingOverview";

export default {
  name: 'index',
  methods: {
    ...mapActions('$_project', ['fetchProjects', 'resetBaseState'])
  },
  components: {
    BookingOverview,
    Footer,
    TheHeader
  },
  async created() {
    const STORE_KEY = '$_project';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
    try {
      await this.fetchProjects();
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
