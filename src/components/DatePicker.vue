<template>
    <div>
      <input type="date" placeholder="Check In"/>
      <input type="date" placeholder="Check Out"/>
    </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    availableDates: Array,
  },
}
</script>

<style scoped>

</style>
