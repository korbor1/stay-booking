import { shallowMount } from '@vue/test-utils';
import DayInCalendar from '@/components/DayInCalendar.vue';


describe('DayInCalendar.vue', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(DayInCalendar,
          {
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
    test('emit onHidePopup event when clicked on component', () => {
        const wrapper = shallowMount(Popup)
        wrapper.find('div').trigger('click');
        expect(wrapper.emitted().onHidePopup.length).toBe(1);
    });
});