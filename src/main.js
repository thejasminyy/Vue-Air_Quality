import Vue from 'vue';
import App from './App.vue';

//定義變數 接收等級
const levels = {
  level1: 'level1',
  level2: 'level2',
  level3: 'level3',
  level4: 'level4',
  level5: 'level5',
  level6: 'level6',
};
//定義filter  變數為aqiClass
Vue.config.productionTip = false;
Vue.filter('aqiClass', function(aqi) {
  let className = '';
  //判定aqi的值 會返回多少等級
  if (aqi >= 0 && aqi <= 50) {
    className = levels.level1;
  } else if (aqi > 50 && aqi <= 100) {
    className = levels.level2;
  } else if (aqi > 100 && aqi <= 150) {
    className = levels.level3;
  } else if (aqi > 150 && aqi <= 200) {
    className = levels.level4;
  } else if (aqi > 200 && aqi <= 300) {
    className = levels.level5;
  } else {
    className = levels.level6;
  }

  console.log(typeof aqi, aqi, className);

  return className;
});
new Vue({
  render: (h) => h(App),
}).$mount('#app');
