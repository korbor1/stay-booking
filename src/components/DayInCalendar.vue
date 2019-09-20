<template>
    <div @click="addDate"
        :class="{
            day: true,
            inActualMonth: dayInfo.inActualMonth,
            available: dayInfo.isAvailable,
            checked: isChecked(),
        }">
        {{ dayInfo.day }}
    </div>
</template>

<script>
export default {
  name: 'DayInCalendar',
  props: {
      dayInfo: Object,
      checkIn: Date,
      checkOut: Date,
      nextNotAvailableDate: Date,
  },
  methods: {
      addDate() {
          let pickedDayInMs = this.dayInfo.date.getTime();
          let checkInInMs = this.checkIn === null ? null : this.checkIn.getTime();
          let checkOutInMs = this.checkOut === null ? null : this.checkOut.getTime();
          let nextNotAvailableDate = this.nextNotAvailableDate === null ? null : this.nextNotAvailableDate.getTime();

          if(this.dayInfo.isAvailable) {
              if(checkInInMs === null || checkOutInMs === null && pickedDayInMs < checkInInMs) {
                  this.$emit('onAddCheckIn', this.dayInfo.date);
              } else if(checkInInMs !== null && checkOutInMs === null && pickedDayInMs > checkInInMs && pickedDayInMs < nextNotAvailableDate) {
                  this.$emit('onAddCheckOut', this.dayInfo.date);
              } else if(checkInInMs !== null && checkOutInMs !== null){
                  this.$emit('onAddCheckIn', this.dayInfo.date);
                  this.$emit('onAddCheckOut', null);
              } else {
                  alert("Ten dzień lub zakres dat jest niedostępny, wybierz inną datę!")
              }
          } else {
              alert("Ten dzień lub zakres dat jest niedostępny, wybierz inną datę!")
          }
      },
      isChecked() {
          let pickedDayInMs = this.dayInfo.date.getTime();
          let checkInInMs = this.checkIn === null ? null : this.checkIn.getTime();
          let checkOutInMs = this.checkOut === null ? null : this.checkOut.getTime();

          if(pickedDayInMs === checkInInMs || pickedDayInMs === checkOutInMs) {
              return true;
          }
      },
  },
}

</script>

<style scoped>
    .day {
        width: 21px;
        height: 21px;
        text-align: center;
        padding: 5px;
        border: 2px solid transparent;
        border-radius: 50%;
        line-height: 21px;
    }

    .day.inActualMonth {
        color: #2c3e50;
    }

    .day.inActualMonth:hover {
        cursor: pointer;
    }

    .day.inActualMonth.available {
        border-color: #4fe2c0;
        color: #4fe2c0;
    }

    .day.inActualMonth.available.checked {
        background-color: #4fe2c0;
        color: #fff;
    }
</style>
