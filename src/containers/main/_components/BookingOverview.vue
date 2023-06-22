<template>
  <div>
    <h1>
      Booking Overview
    </h1>
    <v-table height="300px">
      <thead>
      <tr>
        <th class="text-left pa-2">
          Id
        </th>
        <th class="text-left pa-2">
          Title
        </th>
        <th class="text-left pa-2">
          Date
        </th>
        <th class="text-left pa-2">
          Completed
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in projects" :key="item.name">
        <td class="pa-2">{{ item.id }}</td>
        <td class="pa-2">{{ item.title }}</td>
        <td class="pa-2">{{ item.dueDate }}</td>
        <td class="pa-2">{{ item.completed }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "BookingOverview",
  data: () => ({
    items: [
      {"id":1,"title":"Activity 1","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":false},
      {"id":2,"title":"Activity 2","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":true},
      {"id":3,"title":"Activity 3","dueDate":"2023-06-22T13:17:56.3810676+00:00","completed":false}],
  }),
  computed: {
    ...mapGetters('$_project', ['projects'])
  },
}
</script>

<style scoped>

</style>
