import LTableExamples from "./L-Table.examples.vue";

export default {
	title: "Component Library/Tables"
};

export const LTableStory = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	components: { LTableExamples },
	template: "<LTableExamples v-bind=\"$props\" />"
});

