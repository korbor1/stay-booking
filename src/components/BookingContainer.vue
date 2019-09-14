<template>
  <div class="container">
    <booking-header :price="price" :opinions="opinions"></booking-header>
    <booking-content></booking-content>
  </div>
</template>

<script>
import BookingHeader from "./BookingHeader.vue";
import BookingContent from "./BookingContent.vue";

export default {
  name: 'BookingContainer',
  props: {
    price: Object,
    opinions: Object,
    availableDates: Array,
  },
  components: {
    BookingHeader,
    BookingContent,
  }
}
</script>

<style scoped>
  .container {
    border: 1px solid #afafaf;
    width: 400px;
    height: 500px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
