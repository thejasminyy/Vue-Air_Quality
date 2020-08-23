<template>
  <div id="header">
    <div class="header">
      <div class="filterCounty">
        <h1>空氣品質指標(AQI)</h1>
        <select v-model="selectedCounty" @change="changeCounty">
          <option disabled>請選擇地區</option>
          <option v-for="(county, index) in counties" :value="county" :key="index">{{county}}</option>
        </select>
      </div>
      <div class="metricWrap">
        <div class="metric">
          <div class="level1">0~50</div>
          <div>良好</div>
        </div>
        <div class="metric">
          <div class="level2">51~100</div>
          <div>普通</div>
        </div>
        <div class="metric">
          <div class="level3">101~150</div>
          <div>對敏感族群
            <br>不健康
          </div>
        </div>
        <div class="metric">
          <div class="level4">151~200</div>
          <div>對所有族群
            <br>不健康
          </div>
        </div>
        <div class="metric">
          <div class="level5">201~300</div>
          <div>非常不健康</div>
        </div>
        <div class="metric">
          <div class="level6">301~400</div>
          <div>危害</div>
        </div>
      </div>
    </div>
    <div class="HeaderTitle">
      <div class="selectedCounty">{{ selectedCounty }}</div>
      <div class="separateLineWrap">
        <div class="separateLine"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["counties"],
  data: function() {
    return {
      selectedCounty: ""
    };
  },
  methods: {
    changeCounty(e) {
      this.selectedCounty = e.target.value;
      this.$emit("countyChange", this.selectedCounty);
    }
    //使用emit 傳入父元素
  },
  watch: {
    counties: function(prev, next) {
      this.selectedCounty = next ? next[0] : "";
    }
  }
};
</script>


<style>
.header {
  display: flex;
  flex-wrap: wrap;
}
.filterCounty {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.filterCounty h1 {
  font-size: 37px;
  margin: 0px 0px 13px 0px;
}
select {
  font-weight: bold;
  width: 100%;
  height: 64px;
  padding: 10px;
  border: 2px solid black;
}
.metricWrap {
  flex: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
  margin-left: 15px;
}
.metric {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.metric > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 50px;
  padding: 7px 10px;
}
.metric > div:nth-child(1) {
  height: 100%;
  min-height: 50px;
}

/*HeaderTitle*/
.HeaderTitle {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
}
.selectedCounty {
  flex: 1;
  font-size: 40px;
  font-weight: bold;
}
.separateLineWrap {
  display: flex;
  flex: 5;
  align-items: center;
}
.separateLine {
  width: 100%;
  border-bottom: 2px dotted;
}
</style> 