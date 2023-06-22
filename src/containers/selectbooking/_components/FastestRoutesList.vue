<template>
  <div>
    <v-table height="300px">
      <thead>
      <tr>
        <th class="text-left pa-2">
          Booked
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
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="pa-2">{{ item.booked }}</td>
        <td class="pa-2">{{ item.from }}</td>
        <td class="pa-2">{{ item.to }}</td>
        <td class="pa-2">{{ item.time }}</td>
        <td class="pa-2">{{ item.price }}</td>
        <v-btn @click="orderRoute(item.id)">Select</v-btn>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "ShortestRoutesList",
  methods: {
    orderRoute(id) {
      // TODO: Implement call to backend to order the item
      return id
    }
  },
  data: () => ({
    items: [
      {
        "id": 1,
        "booked": "20.06.2023",
        "from": "Roma",
        "to": "Tripoli",
        "time": 1,
        "price": 1300
      },
      {
        "id": 2,
        "booked": "15.06.2023",
        "from": "Oslo",
        "to": "Berlin",
        "time": 2,
        "price": 1700
      },
      {
        "id": 3,
        "booked": "25.06.2023",
        "from": "Laos",
        "to": "Las Vegas",
        "time": 2,
        "price": 1300
      }
    ],
  }),
}
</script>

<style scoped>

</style>
