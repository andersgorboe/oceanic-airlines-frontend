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
                      required
                      filled
                      rounded
                      hide-details
                      prepend-inner-icon="mdi-lock" />
      </v-card-actions>
      <v-row>
        <v-col>
          <v-card-actions>
            <v-checkbox label="Remember me" class="ma-0" />
          </v-card-actions>
        </v-col>
        <v-col>
          <v-card-actions class="justify-end">
            <router-link :to="resetPassword">
              Forgot password?
            </router-link>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-card-actions class="justify-center">
        <v-btn dark elevation="8" large class="btn_width">Login</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <router-link :to="createNewAccount">
          Don't have a user? Create a new account
        </router-link>
      </v-card-actions>
      <v-card-actions class="justify-center guest_btn_pos">
        <v-btn dark elevation="8"
               large class="btn_width"
               v-on:click="createGuestName">Join as guest</v-btn>
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
    createGuestName() {
      this.$router.push({ name: 'EnterName' });
    },
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
