<template>
  <div class="background">
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
  background-image: url('./ressources/background.jpg');
  background-size: cover;
  height: 100%;
}
</style>
