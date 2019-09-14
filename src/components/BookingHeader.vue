<template>
    <div>
        <price-view :price="price"></price-view>
        <opinions-container :opinions="opinions"></opinions-container>
    </div>
</template>

<script>
import PriceView from "./PriceView.vue";
import OpinionsContainer from "./OpinionsContainer.vue";

export default {
  name: 'BookingHeader',
  props: {
    price: Object,
    opinions: Object,
  },
  components: {
    PriceView,
    OpinionsContainer,
  }
}
</script>