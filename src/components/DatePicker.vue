<template>
    <form>
        <calendar-page v-if="!showCalendarPage" @onCloseCalendarPage="closeCalendarPage" :availableDates="this.availableDates"></calendar-page>
        <label>Dates</label>
        <div class="date-picker-inputs">
            <input type="text" placeholder="Check In" v-model="checkIn" @click="showCalendarPage = true" />
            <span class="arrow">&#8594;</span>
            <input type="text" placeholder="Check Out" @click="showCalendarPage = true" />
        </div>
    </form>
</template>

<script>
import CalendarPage from "./CalendarPage.vue";

export default {
  name: 'DatePicker',
  data() {
      return {
          checkIn: "",
          checkOut: "",
          showCalendarPage: false,
      }
  },
  props: {
    availableDates: Array,
  },
  methods: {
      closeCalendarPage() {
          this.showCalendarPage = false;
      },
  },
  components: {
      CalendarPage,
  }
}
</script>

<style scoped>
    form {
        position: relative;
    }

    label {
        display: block;
        font-weight: 600;
        font-size: 13px;
        margin-bottom: 5px;
    }

    .date-picker-inputs {
        display: flex;
        border-radius: 5px;
        border: 1px solid #afafaf;
        padding: 5px 10px;
    }

    .date-picker-inputs input {
        border: 0;
        background-color: #efefef;
        padding: 0;
        width: 150px;
    }

    input::placeholder {
        font-size: 18px;
    }

    .arrow {
        font-size: 36px;
        height: 18px;
        padding: 10px;
        line-height: 10px;
    }
</style>
