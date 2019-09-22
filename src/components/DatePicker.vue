<template>
    <form @submit="checkForm" method="get" action="/">
        <calendar-page
            v-show="showCalendarPage"
            :isShow="showCalendarPage"
            @onCloseCalendarPage="closeCalendarPage"
            @onPutDatesInForm="putDatesInForm"
            :availableDates="this.availableDates"
        ></calendar-page>
        <label>Dates</label>
        <div class="date-picker-inputs" @click="showCalendarPage = true">
            <input type="text" placeholder="Check In" v-model="checkInDate" />
            <span class="arrow">&#8594;</span>
            <input type="text" placeholder="Check Out" v-model="checkOutDate" />
        </div>
        <ul v-if="errors.length" class="form-errors">
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <button>Send</button>
        <transition name="fade">
            <popup class="success" msg="Thank you for you reservation!" v-if="showSuccessPopup" @onHidePopup="togglePopup"></popup>
        </transition>
    </form>
</template>

<script>
import CalendarPage from "./CalendarPage.vue";
import Popup from "./Popup.vue";

export default {
  name: 'DatePicker',
  data() {
      return {
          checkInDate: "",
          checkOutDate: "",
          showCalendarPage: false,
          errors: [],
          showSuccessPopup: false,
      }
  },
  props: {
    availableDates: Array,
  },
  methods: {
      closeCalendarPage() {
          this.showCalendarPage = false;
      },
      putDatesInForm(checkIn, checkOut) {
          this.checkInDate = checkIn.toLocaleDateString();
          this.checkOutDate = checkOut.toLocaleDateString();
          this.closeCalendarPage();
      },
      checkForm(e) {
        e.preventDefault();
        this.errors = [];

        if (this.checkInDate && this.checkOutDate) {
            this.togglePopup();
            return true;
        }

        if (!this.checkInDate) {
            this.errors.push('Check-in date is required.');
        }
        if (!this.checkOutDate) {
            this.errors.push('Check-out date is requied.');
        }
    },
    togglePopup() {
        this.showSuccessPopup = !this.showSuccessPopup;
    }
  },
  components: {
      CalendarPage,
      Popup,
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
        width: 160px;
        font-size: 18px;
        color: #206b6f;
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

    button {
        -webkit-appearance: none;
        margin-top: 30px;
        width: 100%;
        height: 40px;
        background-color: #e66059;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 20px;
    }

    button:hover {
        cursor: pointer;
        background-color: #f56a63;
    }

    .form-errors {
        list-style: none;
        font-size: 13px;
        color: #e04d4d;
        padding: 0;
        font-weight: 700;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
