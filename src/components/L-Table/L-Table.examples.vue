<template>
  <l-table :data="customers">
    <template v-slot:header>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </template>
    <template #body="{ item }: { item: any }">
				<td>{{ item.firstName }}</td>
				<td>{{ item.firstName }}</td>
				<td>{{ item.firstName }}</td>
				<td>{{ item.firstName }}</td>
    </template>
  </l-table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LTable from "./L-Table.vue";

let id = 0;

const names = [
  { first: "Ricky", last: "Reed" },
  { first: "Dewayne", last: "Kemp" },
  { first: "Marcelo", last: "Dunn" },
  { first: "Kelvin", last: "Perez" },
  { first: "Lee", last: "Kane" },
  { first: "Abraham", last: "Medina" },
  { first: "Hilary", last: "Phelps" },
  { first: "Maude", last: "Velazquez" },
  { first: "Tamera", last: "Salazar" },
  { first: "Billie", last: "Hernandez" },
  { first: "Elva", last: "Lin" },
  { first: "Corine", last: "Farley" },
  { first: "Henrietta", last: "Mckay" },
  { first: "Vanessa", last: "Brewer" },
  { first: "Irene", last: "Khan" },
  { first: "Freda", last: "Boyer" },
  { first: "Iris", last: "Meyers" },
  { first: "Joanna", last: "Mahoney" },
  { first: "Albert", last: "Skinner" },
  { first: "Waldo", last: "Figueroa" },
  { first: "Marlin", last: "Hammond" },
  { first: "Brandon", last: "Tucker" },
  { first: "Napoleon", last: "Sims" },
  { first: "Andy", last: "Cameron" },
];

function createFakeCustomer(id: number): any {
  const value = names[id++ % names.length];
  return {
    id,
    firstName: value.first,
    lastName: value.last,
    email: `${value.first}.${value.last}@gmail.com`,
  };
}

function createFakeCustomerList(): any[] {
  return names.map((_, idx) => createFakeCustomer(idx + 1));
}

export default defineComponent({
  name: "L-Table-Story",
  components: {
    LTable,
  },
  data() {
    return {
      customers: createFakeCustomerList(),
    };
  },
});
</script>
