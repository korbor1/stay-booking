<template>
  <div id="app">
    <booking-container :price="price" :opinions="opinions" :availableDates="availableDates" />
  </div>
</template>

<script>
import BookingContainer from './components/BookingContainer.vue'

export default {
  name: 'app',
  data() {
    return {
      price: {
        value: 298,
        currency: "zł"
      },
      opinions: {
        rate: 4.5,
        maxRate: 5,
        ratesQuantity: 123,
      },
      availableDates: [
        { checkIn: new Date("2019-09-01"), checkOut: new Date("2019-09-07") },
        { checkIn: new Date("2019-09-10"), checkOut: new Date("2019-09-13") },
        { checkIn: new Date("2019-09-16"), checkOut: new Date("2019-09-17") },
      ]
    }
  },
  components: {
    BookingContainer
  }
}
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    background-color: #efefef;
    padding: 5px;
    height: 100vh;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
</style>
