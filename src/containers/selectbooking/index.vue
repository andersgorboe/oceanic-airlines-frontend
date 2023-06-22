<template>
  <div class="super-padding">
    <TheHeader />
    <h2>Cheapest route</h2>
    <CheapestRoutesList />
    <h2>Fastest route</h2>
    <FastestRoutesList />
  </div>
</template>

<script>
import TheHeader from '../page/_components/TheHeader';
import CheapestRoutesList from "./_components/CheapestRoutesList";
import FastestRoutesList from "./_components/FastestRoutesList";

export default {
  name: "index",
  components: {
    CheapestRoutesList,
    TheHeader,
    FastestRoutesList
  }
}
</script>

<style scoped>
.super-padding {
  padding: 30px !important;
}
</style>
