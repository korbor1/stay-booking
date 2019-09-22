<template>
    <div class="calendar-page-container" tabindex="0" @focusout="closeCalendarEvent">
      <calendar-page-month-pick
        :pickedMonth="this.month"
        :pickedYear="this.year"
        @onPreviousMonth="prevMonth"
        @onNextMonth="nextMonth"
      ></calendar-page-month-pick>
      <calendar-page-days
        :pickedMonth="this.month"
        :pickedYear="this.year"
        :availableDates="this.availableDates"
        @onPutDatesInForm="putDatesInFormEvent"
      ></calendar-page-days>
    </div>
</template>

<script>
import CalendarPageMonthPick from "./CalendarPageMonthPick.vue";
import CalendarPageDays from "./CalendarPageDays.vue";

export default {
  name: 'CalendarPage',
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }
  },
  props: {
    availableDates: Array,
    isShow: Boolean,
  },
  methods: {
    closeCalendarEvent() {
      this.$emit('onCloseCalendarPage');
    },
    putDatesInFormEvent(checkIn, checkOut) {
      if(checkIn !== null && checkOut !== null) {
        this.$emit('onPutDatesInForm', checkIn, checkOut);
      }
    }, 
    prevMonth() {
      if(this.month === 0) {
        this.month = 11;
        this.year = this.year - 1;
      } else {
        this.month = this.month - 1;
      }
    },
    nextMonth() {
      if(this.month === 11) {
        this.month = 0;
        this.year = this.year + 1;
      } else {
        this.month = this.month + 1;
      }
    }
  },
  watch: {
    isShow() {
      this.$el.focus();
    }
  },
  components: {
    CalendarPageMonthPick,
    CalendarPageDays,
  }
}
</script>

<style scoped>
  .calendar-page-container {
    outline: 0;
    position: absolute;
    top: 80px;
    width: 100%;
    height: 460px;
    background-color: #fff;
  }
</style>
