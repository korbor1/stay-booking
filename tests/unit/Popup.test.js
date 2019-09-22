import {
  shallowMount
} from '@vue/test-utils'
import Popup from '@/components/Popup.vue'

describe('Popup.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Popup);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('Popup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Popup, {
      propsData: {
        msg
      }
    });
    expect(wrapper.text()).toMatch(msg);
  })
})

describe('Popup.vue', () => {
  it('renders default msg when props not passed', () => {
    const wrapper = shallowMount(Popup);
    expect(wrapper.text()).toMatch('Selected date is not available!');
  })
})

describe('Popup.vue', () => {
  test('emit onHidePopup event when clicked on component', () => {
    const wrapper = shallowMount(Popup);
    wrapper.find('div').trigger('click');
    expect(wrapper.emitted().onHidePopup.length).toBe(1);
  });
});