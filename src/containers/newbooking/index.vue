<template>
  <div class="super-padding">
    <TheHeader />
    <h1>New booking</h1>
    <BookingForm />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "./_store";
import TheHeader from '../page/_components/TheHeader';
import BookingForm from "./_components/BookingForm";


export default {
  name: "index.vue",
  methods: {
    ...mapActions('$_cities', ['fetchCities', 'resetBaseState'])
  },
  components: {
    BookingForm,
    TheHeader
  },
  async created() {
    const STORE_KEY = '$_cities';
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
    try {
      await this.fetchCities();
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
}
</script>

<style scoped>
.super-padding {
  padding: 30px !important;
}
</style>
