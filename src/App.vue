<template>
  <div id="app">
    <!--在子元素中使用emit , v-on:自訂意名稱 引入-->
    <div class="center">
      <Header :counties="counties" v-on:countyChange="onCountyChange" />
      <!--必須綁定v-bind-->
      <section class="cardSection">
        <div class="cardFocus">
          <div v-if="selectedsiteCard" class="selectedsiteCard">
            <div class="selectedsite">{{selectedsiteCard.name}}</div>
            <!--綁定v-bind:clss 接收值 main.js定義方法與變數  -->
            <div class="aqi" v-bind:class="selectedsiteCard.aqi | aqiClass">{{selectedsiteCard.aqi}}</div>
          </div>
        </div>
        <!--市區卡片 v-on是使用emit子回父接收的值-->
        <div class="cardList">
          <SiteAirCard
            v-for="(XXX, i) in filteredDataset"
            :key="i"
            :airQuality="XXX"
            v-on:clickAirCard="clickAirCard"
          />
        </div>
      </section>
    </div>
    <footer>
      <div class="footBox">
        <div class="footerLeft">
          <p>資料來源:行政院環保署</p>
        </div>
        <div class="footerRight">
          <p>Copyright © 2020 Jasmin.All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import * as axios from "axios";
import Header from "./components/Header";
import SiteAirCard from "./components/SiteAirCard";
export default {
  name: "App",
  components: {
    Header,
    SiteAirCard,
  },
  data: function () {
    return {
      dataset: [], //api資料
      counties: [], //縣市
      selectedCounty: "", //子回傳的縣市資料
      selectedsiteCard: undefined, //市區
    };
  },
  mounted() {
    axios
      .get(
        "https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json"
      )
      .then((res) => res.data.records)
      .then((records) => {
        records.forEach((record) => {
          //每筆資料都是record
          this.dataset.push({
            name: record.SiteName, //市區
            county: record.County, //縣市
            aqi: record.AQI, //aqi值
            status: record.Status, //判定空氣是否好
          });
          // indexOf 搜尋record.County 如果沒有這縣市資料 就push進去
          if (this.counties.indexOf(record.County) === -1) {
            this.counties.push(record.County);
          }
        });
        this.selectedCounty = this.counties[0]; //縣市值第0筆
        this.selectedsiteCard = this.filteredDataset[0]; //市區的值第0筆
      });
  },
  computed: {
    filteredDataset() {
      return this.dataset.filter(
        (data) => data.county && data.county === this.selectedCounty
      );
    },
  },
  methods: {
    //在子元素中使用emit 引入父元素
    onCountyChange(selectedCounty) {
      this.selectedCounty = selectedCounty;
      this.selectedsiteCard = this.filteredDataset[0];
    },
    //事件執行 selectedsiteCard會更新
    clickAirCard(selectedsiteCard) {
      this.selectedsiteCard = selectedsiteCard;
    },
  },
};
</script>

<style>
.center {
  max-width: 1200px;
  width: 80%;
  padding: 40px 30px;
  margin: auto;
}
section.cardSection {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.cardFocus {
  display: flex;
  flex: 1;
  height: 550px;
}
.cardList {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
}

.selectedsiteCard {
  display: flex;
  flex-basis: 100%;
  margin-top: 15px;
}
.selectedsite,
.aqi {
  font-size: 30px;
  text-align: center;
  width: 100%;
  height: 80px;
  line-height: 80px;
  border: 3px solid black;
}
.selectedsite {
  background-color: white;
  border-right-width: 1.5px;
}
.aqi {
  border-left-width: 1.5px;
}
/*aqi level class*/
.level1 {
  background-color: #008800;
}
.level2 {
  background-color: #ffddaa;
}
.level3 {
  background-color: #ff7744;
}
.level4 {
  background-color: #ff3333;
}
.level5 {
  background-color: #7744ff;
}
.level6 {
  background-color: #cc00ff;
}
/* footer */
footer {
  display: flex;
  justify-content: center;
  background-color: black;
}
.footBox {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 80%;
  margin: auto;
  padding: 0px 20px;
  color: white;
}
/* .footerLeft,
.footerRight {
  flex: 1;
} */
/*RWD*/
@media (max-width: 1199px) {
  .filterCounty,
  .metricWrap {
    flex-basis: 100%;
  }
  .metricWrap {
    margin: 10px 0px 0px 0px;
  }
  .cardFocus {
    flex-basis: 200px;
  }
  .container {
    margin-right: 0px;
    flex-basis: 500px;
  }
}
@media (max-width: 992px) {
  .metricWrap {
    flex-basis: 70%;
  }
  .separateLineWrap {
    flex: 4;
  }
}
@media (max-width: 768px) {
  .metric {
    flex-basis: 50%;
  }
  .metricWrap > div {
    font-size: 14px;
  }
  .selectedCounty {
    text-align: center;
  }
  .separateLineWrap {
    flex: 0;
  }
  .cardFocus {
    flex-basis: 100%;
    height: 120px;
  }
  .container {
    flex-basis: 100%;
    margin: 15px 15px;
  }
  .footerLeft,
  .footerRight {
    flex-basis: 100%;
    text-align: center;
  }
}
@media (max-width: 400px) {
  .filterCounty h1 {
    font-size: 30px;
  }
}
</style>