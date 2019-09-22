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
        "2019-09-22T00:00", "2019-09-23T00:00", "2019-09-27T00:00", "2019-09-28T00:00",
        "2019-09-29T00:00", "2019-09-30T00:00", "2019-10-02T00:00", "2019-10-03T00:00", 
        "2019-10-04T00:00", "2019-10-21T00:00", "2019-10-22T00:00", "2019-11-01T00:00",
        "2019-11-02T00:00", "2019-11-12T00:00", "2019-11-13T00:00", "2019-11-14T00:00",
        "2019-11-15T00:00", "2019-11-16T00:00", "2019-11-27T00:00", "2019-11-28T00:00",
        "2019-11-29T00:00", "2019-12-02T00:00", "2019-12-03T00:00", "2019-12-04T00:00",
        "2019-12-12T00:00", "2019-12-13T00:00", "2019-12-14T00:00", "2019-12-15T00:00",
        "2019-12-16T00:00",
      ],
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
