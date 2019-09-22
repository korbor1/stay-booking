import {
  shallowMount
} from '@vue/test-utils';
import DayInCalendar from '@/components/DayInCalendar.vue';


describe('DayInCalendar.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(DayInCalendar, {
      propsData: {
        dayInfo: {
          inActualMonth: true,
          isAvailable: true,
          date: new Date(),
        }
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('DayInCalendar.vue', () => {
  test('have class .checked if day date is equal to check in or check out', () => {
    const wrapper = shallowMount(DayInCalendar, {
      propsData: {
        dayInfo: {
          inActualMonth: true,
          isAvailable: true,
          date: new Date(),
        },
        checkIn: new Date(),
      }
    })
    wrapper.vm.isChecked();
    expect(wrapper.find('.day').classes()).toContain('checked');
  });
});

describe('DayInCalendar.vue', () => {
  test('dont have class .checked if day date is not equal to check in or check out', () => {
    const wrapper = shallowMount(DayInCalendar, {
      propsData: {
        dayInfo: {
          inActualMonth: true,
          isAvailable: true,
          date: new Date(),
        },
        checkIn: new Date("2010-01-01"),
      }
    })
    wrapper.vm.isChecked();
    expect(wrapper.find('.day').classes()).not.toContain('checked');
  });
});

describe('DayInCalendar.vue', () => {
  test('emit onAddCheckIn event when day is available and picked date is lower than check in date', () => {
    const wrapper = shallowMount(DayInCalendar, {
      propsData: {
        dayInfo: {
          inActualMonth: true,
          isAvailable: true,
          date: new Date("2000-09-10"),
        },
        checkIn: new Date(),
      }
    })
    wrapper.find('.day').trigger('click');
    expect(wrapper.emitted().onAddCheckIn.length).toBe(1);
  });
});

describe('DayInCalendar.vue', () => {
  test('emit event onShowPopup to show error when picked date is not available', () => {
    const wrapper = shallowMount(DayInCalendar, {
      propsData: {
        dayInfo: {
          inActualMonth: true,
          isAvailable: false,
          date: new Date(),
        },
      }
    })
    wrapper.find('.day').trigger('click');
    expect(wrapper.emitted().onShowPopup.length).toBe(1);
  });
});