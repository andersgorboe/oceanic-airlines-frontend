<template>
  <div>
    <h3>Destination</h3>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        From city
        <v-autocomplete
          label="Search for a city"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4">
        To city
        <v-autocomplete
          label="Search for a city"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        ></v-autocomplete>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <h3>Departure</h3>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        Date
        <v-text-field label="DD-MM-YYYY"></v-text-field>
      </v-col>
      <v-col cols="4">
        Time
        <v-autocomplete
          label="Pick a time"
          :items="['00:00','01:00','02:00']"
        ></v-autocomplete>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <h3>Package information</h3>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        Weight
        <v-autocomplete
          label="Select a weight"
          :items="['0 - 1kg', '1 - 5kg', '5 - 20kg']"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4">
        Dimention
        <v-autocomplete
          label="Select a dimention"
          :items="['25x25x25 cm', '40x40x40 cm', '200x200x200 cm']"
        ></v-autocomplete>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <h3>Sender information</h3>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        Name/Company
        <v-text-field label="Type name or company"></v-text-field>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <v-btn @click="cancelBooking">Cancel</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn @click="saveBooking">Save Booking</v-btn>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BookingForm",
  methods: {
    cancelBooking() {
      this.$router.push({ name: 'Dashboard' });
    },
    saveBooking() {
      // TODO: Add save booking stuff
      this.$router.push({ name: 'Dashboard' });
      alert("Booking successfully created.");
    }
  }
}
</script>

<style scoped>

</style>
