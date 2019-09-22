<template>
	<h2>
		{{ price.value }} {{ price.currency }}
	</h2>
</template>

<script>
export default {
	name: 'PriceView',
	props: {
		price: Object,
	},
}
</script>
