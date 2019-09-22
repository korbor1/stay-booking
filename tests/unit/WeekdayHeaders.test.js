import { shallowMount } from '@vue/test-utils';
import WeekdaysHeader from '@/components/WeekdaysHeader.vue';


describe('WeekdaysHeader.vue', () => {
  test('is a Vue instance', () => {
      const wrapper = shallowMount(WeekdaysHeader)
      expect(wrapper.isVueInstance).toBeTruthy();
  });
});


describe('WeekdaysHeader.vue', () => {
  it('renders correct amount of columns when props.headers passed', () => {
    const headers = ['Mon', 'Tue', 'Wed'];
    const wrapper = shallowMount(WeekdaysHeader, {
      propsData: { headers }
    })

    const divColumns = wrapper.findAll('.weekdays-header div').length;
    expect(divColumns).toBe(headers.length)
  })
});