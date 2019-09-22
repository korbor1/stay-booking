<template>
	<div class="popup" @click="hidePopup">
		{{ msg }}
	</div>
</template>

<script>
export default {
	name: 'Popup',
	props: {
		msg: {
			type: String,
			default: "Selected date is not available!",
		},
	},
	methods: {
		hidePopup() {
			this.$emit("onHidePopup");
		}
	},
	created() {
		setTimeout(() => this.hidePopup(), 3000);
	}
}
</script>

<style scoped>
.popup {
	position: absolute;
	left: 16%;
	top: 28%;
	width: 250px;
	height: 30px;
	background-color: #dadada;
	color: #6d5959;
	padding: 20px;
	border-radius: 5px;
	text-align: center;
}

.success {
	background-color: #fff;
	color: #8bd591;
	border: 1px solid #8bd591;
}

.popup:hover {
	cursor: pointer;
}
</style>
