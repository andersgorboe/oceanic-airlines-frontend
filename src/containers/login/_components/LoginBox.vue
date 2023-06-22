<template>
  <div>
    <v-card class="mx-auto login pa-4" max-width="500">
      <h1 class="text-center pa-2">Sign in</h1>
      <v-card-actions>
        <v-text-field label="Username or email"
                      required
                      filled
                      rounded
                      hide-details
                      prepend-inner-icon="mdi-account-circle" />
      </v-card-actions>
      <v-card-actions>
        <v-text-field label="Password"
                      type="password"
                      required
                      filled
                      rounded
                      hide-details
                      prepend-inner-icon="mdi-lock" />
      </v-card-actions>
      <v-card-actions class="justify-center">
        <v-btn dark elevation="8" large class="btn_width" v-on:click="login">Login</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <router-link :to="createNewAccount">
          Don't have a user? Create a new account
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  computed: {
    resetPassword() {
      return '';
    },
    createNewAccount() {
      return '';
    },
  },
  methods: {
    login() {
      // TODO: Add axios call to backend for login credentials.
      this.$router.push({ name: 'Dashboard' });
    }
  },
};
</script>

<style scoped>
.login {
  margin-top: 15vh;
}
.guest_btn_pos {
  padding-bottom: 1em;
  padding-top: 2em;
}
.btn_width {
  width: 80%;
}
</style>
