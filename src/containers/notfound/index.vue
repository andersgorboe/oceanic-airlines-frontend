<template>
  <div class="plane-style">
    <h1 class="big-text">OOPS!</h1>
    <h2>Oceanic Airlines could not deliver your webpage!<br/>Please try another route!</h2>
    <img src="./ressources/crashed-plane.png">
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style>
  .plane-style {
    width: 100%;
    text-align: center;
  }
  .big-text {
    font-size: 5rem !important;
    padding: 0.5em;
    color: #223B8D;
  }
</style>
