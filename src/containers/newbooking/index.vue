<template>
  <div class="super-padding">
    <TheHeader />
    <h1>New booking</h1>
    <BookingForm />
  </div>
</template>

<script>
import TheHeader from '../page/_components/TheHeader';
import BookingForm from "./_components/BookingForm";

export default {
  name: "index.vue",
  components: {
    BookingForm,
    TheHeader
  },
}
</script>

<style scoped>
.super-padding {
  padding: 30px !important;
}
</style>
