<template>
  <div class="filler">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Filler',
  props: {
    title: String
  }
};
</script>

<style scoped>
.filler {
  padding-top: 3em;
  padding-bottom: 3em;
  text-align: center;
  background-color: #203e5f;
  color: white;
}
</style>
