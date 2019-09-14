<template>
    <div class="opinions-container">
      <div class="stars-container" :style="{width: emptyStarsWidth}">
        <star-icon 
          v-for="(opinion, i) in opinions.maxRate"
          :key="i"
          :iconColor="emptyColor"
        ></star-icon>
      </div>
      <div class="stars-container" :style="{width: fillStarsWidth}">
        <star-icon 
          v-for="(opinion, i) in opinions.maxRate"
          :key="i"
          :iconColor="fillColor"
        ></star-icon>
      </div>
      <span :style="{marginLeft: ratesQuantityMargin}">{{ opinions.ratesQuantity }}</span>
    </div>
</template>

<script>
import StarIcon from "./StarIcon.vue";

export default {
  name: 'OpinionsContainer',
  data() {
    return {
      fillColor: "#206b6f",
      emptyColor: "#ababab",
    }
  },
  props: {
    opinions: Object,
  },
  computed: {
    //dynamic width of empty stars containers in case of max rate other than 5
    emptyStarsWidth() {
      return `${15 * this.opinions.maxRate}px`;
    },
    //width of stars filled with color
    fillStarsWidth() {
      return `${15 * this.opinions.rate}px`;
    },
    //dynamic margin of quantity rates
    ratesQuantityMargin() {
      return `${15 * this.opinions.maxRate + 5}px`;
    }
  },
  components: {
    StarIcon,
  }
}
</script>

<style scoped>
  .opinions-container {
    padding-bottom: 20px;
    border-bottom: 1px solid #afafaf;
    position: relative;
  }

  .stars-container {
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
  }

  span {
    font-weight: 600;
    font-size: 13px;
  }
</style>
