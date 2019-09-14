<template>
  <div>
    Calendar
    <p v-for="date in availableDates" :key={date}>Zameldowanie: {{ localeDate(date.checkIn) }} / Wymeldowanie: {{ localeDate(date.checkOut) }} </p>
  </div>
</template>

<script>

export default {
  name: 'CalendarPage',
  props: {
    availableDates: Array,
  },
  methods: {
      localeDate: function(date) {
        return date.toLocaleDateString()
      }
  }
}
</script>

<style scoped>

</style>
