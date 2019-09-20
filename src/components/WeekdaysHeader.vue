<template>
    <div class="weekdays-header">
        <div v-for="day in this.headers"
            :key="day">
            {{ day }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'WeekdaysHeader',
  props: {
        headers: Array,
    },
}
</script>

<style scoped>
    .weekdays-header {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #d3d3d3;
        text-align: center;
    }

    .weekdays-header div {
        width: 35px;
    }
</style>