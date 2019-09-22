<template>
	<div class="days-container">

		<weekdays-header :headers="columns"></weekdays-header>

		<div class="week" v-for="(row, index) in rows" :key="row[index]">
			<day-in-calendar
				v-for="column in columns"
				:key="row[column].date.getTime()"
				:dayInfo="row[column]"
				:checkIn="checkIn"
				:checkOut="checkOut"
				:nextNotAvailableDate="nextNotAvailableDate"
				@onAddCheckIn="addCheckIn"
				@onAddCheckOut="addCheckOut"
				@onShowPopup="togglePopup"
			></day-in-calendar>
		</div>

		<transition name="fade">
			<popup v-if="showDateRangeErrorPopup" @onHidePopup="togglePopup"></popup>
		</transition>

	</div>
</template>

<script>
import WeekdaysHeader from "./WeekdaysHeader.vue";
import DayInCalendar from "./DayInCalendar.vue";
import Popup from "./Popup.vue";

export default {
	name: 'CalendarPageDays',
	data() {
		return {
			columns: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			rows: [],
			checkIn: null,
			checkOut: null,
			nextNotAvailableDate: null,
			showDateRangeErrorPopup: false,
		}
	},
	props: {
		pickedMonth: Number,
		pickedYear: Number,
		availableDates: Array,
	},
	methods: {
		populateRowsWithDays(month, year, dates) {
			let firstDayOfMonth = new Date(year, month).getDay();
			let daysInMonth = 32 - new Date(year, month, 32).getDate();
			let daysInPreviousMonth = 32 - new Date(year, month - 1, 32).getDate();
			let dayNumberToRender = 1;
			let isDayInActualMonth = true;
			let actualMonth = month;
			let availableDates = dates;

			this.rows = [];

			//firstDayOfMonth - 0 - sunday 6 - saturday
			//first row populate with days from previous month if first day in actual month is other than sunday
			if (firstDayOfMonth) {
				dayNumberToRender = daysInPreviousMonth - firstDayOfMonth + 1;
				actualMonth = actualMonth - 1;
				isDayInActualMonth = false;
			}

			//create 6 rows (6 rows in calendar page) with day object data
			//each day object in row (week) has key equal to this.column names
			for (var i = 0; i <= 5; i++) {
				let week = {};

				this.columns.forEach((col, index) => {
					week[this.columns[index]] = {
						day: dayNumberToRender,
						date: new Date(year, actualMonth, dayNumberToRender),
						inActualMonth: isDayInActualMonth,
						isAvailable: this.isAvailable(availableDates, new Date(year, actualMonth, dayNumberToRender)),
					};

					//if day to render is last in actual month
					//set day to 1 and change month to next
					if (dayNumberToRender == daysInMonth || dayNumberToRender == daysInPreviousMonth) {
						dayNumberToRender = 1;
						actualMonth = actualMonth + 1;
						isDayInActualMonth = !isDayInActualMonth;
					} else {
						dayNumberToRender = dayNumberToRender + 1;
					}
				});

				this.rows.push(week);
			}
		},
		isAvailable(availableDays, dateToCheck) {
			return availableDays.some(day => new Date(day).getTime() === dateToCheck.getTime());
		},
		addCheckIn(date) {
			this.checkIn = date;
			this.nextNotAvailableDate = this.findNextNotAvailableDate(this.availableDates, date);
		},
		addCheckOut(date) {
			this.checkOut = date;
			this.putDatesInForm();
		},
		putDatesInForm() {
			this.$emit('onPutDatesInForm', this.checkIn, this.checkOut);
		},
		findNextNotAvailableDate(availableDays, pickedDate) {
			let notAvailableDate = new Date(pickedDate.getTime());

			while (availableDays.some(date => new Date(date).getTime() === notAvailableDate.getTime())) {
				notAvailableDate.setDate(notAvailableDate.getDate() + 1);
			}

			return notAvailableDate;
		},
		togglePopup() {
			this.showDateRangeErrorPopup = !this.showDateRangeErrorPopup;
		},
	},
	watch: {
		pickedMonth() {
			this.populateRowsWithDays(this.pickedMonth, this.pickedYear, this.availableDates);
		}
	},
	mounted() {
		this.populateRowsWithDays(this.pickedMonth, this.pickedYear, this.availableDates);
	},
	components: {
		WeekdaysHeader,
		DayInCalendar,
		Popup,
	}
}
</script>

<style scoped>
.days-container {
	position: relative;
	padding: 20px 25px;
	color: #e3e3e3;
	font-weight: 600;
	font-size: 13px;
}

.week {
	display: flex;
	justify-content: space-between;
	margin: 13px 0;
	background-color: #cafff3;
}

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

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
