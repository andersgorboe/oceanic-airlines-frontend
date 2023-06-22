<template>
  <section>
    <v-app-bar app flat color="#FFFFFF">
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = true" />
      <header>
        <img src="../ressources/oceanic-airlines-logo.png" alt="Logo">
      </header>
      <v-spacer></v-spacer>
      <v-btn text link @click="goToBookingOverview" class="menu-link">Booking overview</v-btn>
      <v-btn text link @click="goToNewBooking" class="menu-link">New booking</v-btn>
      <v-toolbar-items class="hidden-xs-only"> </v-toolbar-items>
    </v-app-bar>
  </section>
</template>
<script>
export default {
  name: 'TheHeader',

  data: () => ({
    drawer: false
  }),
  methods: {
    goToBookingOverview() {
      this.$router.push({ name: 'Dashboard' });
    },
    goToNewBooking() {
      this.$router.push({ name: 'NewBooking' });
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
