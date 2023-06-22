<template>
  <div>
    <h1>
      Booking Overview
    </h1>
    <v-table>
      <thead>
      <tr>
        <th class="text-left pa-2">
          Booked
        </th>
        <th class="text-left pa-2">
          Time
        </th>
        <th class="text-left pa-2">
          From
        </th>
        <th class="text-left pa-2">
          To
        </th>
        <th class="text-left pa-2">
          Duration
        </th>
        <th class="text-left pa-2">
          price
        </th>
        <th class="text-left pa-2">
          Weight
        </th>
        <th class="text-left pa-2">
          Dimention
        </th>
        <th class="text-left pa-2">
          Company
        </th>
        <th class="text-left pa-2">
          Distance
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in bookings" :key="item.id">
        <td class="pa-2">{{ item.booked }}</td>
        <td class="pa-2">{{ item.time }}</td>
        <td class="pa-2">{{ item.from }}</td>
        <td class="pa-2">{{ item.to }}</td>
        <td class="pa-2">{{ item.time }}</td>
        <td class="pa-2">${{ item.price }}</td>
        <td class="pa-2">{{ item.weight }}kg</td>
        <td class="pa-2">{{ item.dimention }}</td>
        <td class="pa-2">{{ item.company }}</td>
        <td class="pa-2">{{ item.distance }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "BookingOverview",
  data: () => ({
    items: [
      {"id":1,"title":"Activity 1","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":false},
      {"id":2,"title":"Activity 2","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":true},
      {"id":3,"title":"Activity 3","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":false}],
  }),
  computed: {
    ...mapGetters('$_booking', ['bookings'])
  },
}
</script>

<style scoped>

</style>
