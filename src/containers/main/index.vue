<template>
  <div class="super-padding">
    <TheHeader />
    <BookingOverview />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './_store';
import TheHeader from '../page/_components/TheHeader';
import BookingOverview from "./_components/BookingOverview";

export default {
  name: 'index',
  methods: {
    ...mapActions('$_booking', ['fetchBookings', 'resetBaseState'])
  },
  components: {
    BookingOverview,
    TheHeader
  },
  async created() {
    const STORE_KEY = '$_booking';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
    try {
      // await this.fetchBookings();
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

<style scoped>
.super-padding {
  padding: 30px !important;
}
</style>
