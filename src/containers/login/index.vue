<template>
  <div class="background row">
    <v-row>
      <v-col>
        <LoginBox />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LoginBox from './_components/LoginBox';

export default {
  name: 'index.vue',
  components: { LoginBox },
};
</script>

<style scoped>
.background {
  background-image: url('./ressources/login-background.png');
  background-size: cover;
  height: 100%;
}
.row {
  margin: 0 !important;
}
</style>
