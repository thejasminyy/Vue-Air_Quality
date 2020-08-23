<template>
  <div class="container" v-on:click="clickAirCard">
    <div class="airQualityName">{{ airQuality.name }}</div>
    <!--綁定v-bind:clss 接收值 main.js定義方法與變數  -->
    <div class="airQualityAQI" v-bind:class="airQuality.aqi | aqiClass">{{ airQuality.aqi }}</div>
  </div>
</template>

<script>
export default {
  name: "SiteAirCard",
  props: ["airQuality"],
  methods: {
    //clickAirCard 傳入父
    clickAirCard() {
      this.$emit("clickAirCard", this.airQuality);
    },
  },
};
</script>


<style>
.container {
  display: flex;
  /* width: calc(50% - 30px); */
  width: 45%;
  margin: 15px;
  cursor: pointer;
}
.airQualityName,
.airQualityAQI {
  font-size: 30px;
  text-align: center;
  width: 100%;
  height: 80px;
  line-height: 80px;
  border: 3px solid black;
}
.airQualityName {
  background-color: white;
  border-right-width: 1.5px;
}
.airQualityAQI {
  border-left-width: 1.5px;
}
</style>