<template>
	<table class="table">
		<thead>
			<slot name="header"></slot>
		</thead>
		<tbody>
			<tr v-for="(item, index) of data" :key="index">
				<slot name="body" v-bind:item="item" v-bind:index="index"></slot>
			</tr>
		</tbody>
	</table>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const LTable = defineComponent({
	props: {
		tableProps: {
			type: Object,
			required: false,
			default: () => ({})
		},
		data: {
			type: Array,
			required: true,
			default: () => []
		}
	}
});

export default LTable;
</script>
