<template>
    <div class="booking-content">
        <date-picker :availableDates="this.availableDates"></date-picker>
    </div>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  name: 'BookingContent',
  props: {
    availableDates: Array,
  },
  components: {
      DatePicker,
  }
}
</script>

<style scoped>
  .booking-content {
    padding-top: 20px;
  }
</style>
