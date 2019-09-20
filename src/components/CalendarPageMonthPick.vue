<template>
    <div class="calendar-page-header">
        <span class="prevMonth" @click="previousMonthEvent">&#8988;</span>
          {{ this.monthsTranslate[this.pickedMonth] }} {{ this.pickedYear }}
        <span class="nextMonth" @click="nextMonthEvent">&#8989;</span>
    </div>
</template>

<script>
export default {
  name: 'CalendarPageMonthPick',
  data() {
    return {
      monthsTranslate: [
        "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
        "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
      ],
    }
  },
  props: {
    pickedMonth: Number,
    pickedYear: Number,
  },
  methods: {
    previousMonthEvent() {
      this.$emit('onPreviousMonth');
    },
    nextMonthEvent() {
      this.$emit('onNextMonth');
    }
  },
}
</script>

<style scoped>
  .calendar-page-header {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 70px;
    background-color: #4fe2c0;
    color: #fff;
    font-size: 24px;
  }

  .prevMonth:hover, .nextMonth:hover {
    cursor: pointer;
  }

  .prevMonth, .nextMonth {
    font-size: 40px;
    position: absolute;
    color: #2c3e50;
    font-weight: 700;
  }

  .prevMonth {
    left: 35px;
    transform: rotate(-45deg);
  }

  .nextMonth {
    right: 35px;
    transform: rotate(45deg);
  }
</style>
