<template>
    <div class="day-wrapper" :class="[isInRange(), { inActualMonth: dayInfo.inActualMonth}]">
        <div @click="addDate"
            :class="{
                day: true,
                inActualMonth: dayInfo.inActualMonth,
                available: dayInfo.isAvailable,
                checked: isChecked(),
            }">
            {{ dayInfo.day }}
        </div>
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
              } else {
                  this.$emit('onAddCheckIn', this.dayInfo.date);
                  this.$emit('onAddCheckOut', null);
              } 
          } else {
             this.showError();
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
      showError() {
          this.$emit("onShowPopup");
      },
      isInRange() {
          let classNames = ["first-in-range", "last-in-range", "in-range"];
          let checkInInMs = this.checkIn === null ? null : this.checkIn.getTime();
          let checkOutInMs = this.checkOut === null ? null : this.checkOut.getTime();
          let pickedDayInMs = this.dayInfo.date.getTime();

          if(checkInInMs !== null && checkOutInMs !== null ) {

            if(pickedDayInMs === checkInInMs) {
                return {[classNames[0]]: true};
            } else if(pickedDayInMs === checkOutInMs) {
                return {[classNames[1]]: true};
            } else if(pickedDayInMs > checkInInMs && pickedDayInMs < checkOutInMs) {
                return {[classNames[2]]: true};
            }
          }

          return false;
      }
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
        margin: 0 auto;
    }

    .day-wrapper {
        width: 100%;
        background-color: #fff;
    }

    .inActualMonth.in-range {
        background-color: #cafff3;
    }

    .inActualMonth {
        color: #2c3e50;
    }

    .inActualMonth:hover {
        cursor: pointer;
    }

    .inActualMonth.available {
        border-color: #4fe2c0;
        color: #4fe2c0;
    }

    .inActualMonth.checked {
        background-color: #4fe2c0;
        color: #fff;
    }

    .day-wrapper.in-range .checked {
        background-color: #4fe2c0;
        color: #fff;
        border: 2px solid #4fe2c0;
        border-radius: 50%;
    }

    .inActualMonth.in-range .available {
        background-color: #cafff3;
        border: 2px solid #cafff3;
        color: #4fe2c0;
        border-radius: 0;
    }

    .inActualMonth.first-in-range {
        background: linear-gradient(90deg, #fff 50%, #cafff3 50%);
    }

    .inActualMonth.last-in-range {
        background: linear-gradient(90deg, #cafff3 50%, #FFF 50%);
    }
    
</style>
