<template>
  <div>
    <v-table height="300px">
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
        <v-btn @click="orderRoute(item)">Select</v-btn>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ShortestRoutesList",
  methods: {
    ...mapActions('$_booking', ['updateBookings']),
    orderRoute(item) {
      // TODO: Implement call to backend to order the item
      this.updateBookings(item)
      this.$router.push({ name: 'Dashboard' });
    }
  },
  data: () => ({
    bookings: [
      {
        "id": 10,
        "booked": "24-06-2023",
        "time": "14:00",
        "from": "Tanger",
        "to": "Sierra Leone",
        "weight": 1,
        "dimention": "Small",
        "company": "Oceanic Airlines",
        "distance": 2,
        "price": 80
      }
    ],
  }),
}
</script>

<style scoped>

</style>
