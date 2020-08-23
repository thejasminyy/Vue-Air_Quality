(function(t){function e(e){for(var a,r,l=e[0],c=e[1],o=e[2],d=0,v=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,l=1;l<i.length;l++){var c=i[l];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Vue-Air_Quality/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("4de4");var a=i("53ca"),s=(i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("2b0e")),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"center"},[i("Header",{attrs:{counties:t.counties},on:{countyChange:t.onCountyChange}}),i("section",{staticClass:"cardSection"},[i("div",{staticClass:"cardFocus"},[t.selectedsiteCard?i("div",{staticClass:"selectedsiteCard"},[i("div",{staticClass:"selectedsite"},[t._v(t._s(t.selectedsiteCard.name))]),i("div",{staticClass:"aqi",class:t._f("aqiClass")(t.selectedsiteCard.aqi)},[t._v(t._s(t.selectedsiteCard.aqi))])]):t._e()]),i("div",{staticClass:"cardList"},t._l(t.filteredDataset,(function(e,a){return i("SiteAirCard",{key:a,attrs:{airQuality:e},on:{clickAirCard:t.clickAirCard}})})),1)])],1),t._m(0)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"footBox"},[i("div",{staticClass:"footerLeft"},[i("p",[t._v("資料來源:行政院環保署")])]),i("div",{staticClass:"footerRight"},[i("p",[t._v("Copyright © 2020 Jasmin.All rights reserved.")])])])])}],l=(i("4160"),i("c975"),i("159b"),i("bc3a")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"filterCounty"},[i("h1",[t._v("空氣品質指標(AQI)")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCounty,expression:"selectedCounty"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCounty=e.target.multiple?i:i[0]},t.changeCounty]}},[i("option",{attrs:{disabled:""}},[t._v("請選擇地區")]),t._l(t.counties,(function(e,a){return i("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),t._m(0)]),i("div",{staticClass:"HeaderTitle"},[i("div",{staticClass:"selectedCounty"},[t._v(t._s(t.selectedCounty))]),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"metricWrap"},[i("div",{staticClass:"metric"},[i("div",{staticClass:"level1"},[t._v("0~50")]),i("div",[t._v("良好")])]),i("div",{staticClass:"metric"},[i("div",{staticClass:"level2"},[t._v("51~100")]),i("div",[t._v("普通")])]),i("div",{staticClass:"metric"},[i("div",{staticClass:"level3"},[t._v("101~150")]),i("div",[t._v("對敏感族群 "),i("br"),t._v("不健康 ")])]),i("div",{staticClass:"metric"},[i("div",{staticClass:"level4"},[t._v("151~200")]),i("div",[t._v("對所有族群 "),i("br"),t._v("不健康 ")])]),i("div",{staticClass:"metric"},[i("div",{staticClass:"level5"},[t._v("201~300")]),i("div",[t._v("非常不健康")])]),i("div",{staticClass:"metric"},[i("div",{staticClass:"level6"},[t._v("301~400")]),i("div",[t._v("危害")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"separateLineWrap"},[i("div",{staticClass:"separateLine"})])}],u={name:"Header",props:["counties"],data:function(){return{selectedCounty:""}},methods:{changeCounty:function(t){this.selectedCounty=t.target.value,this.$emit("countyChange",this.selectedCounty)}},watch:{counties:function(t,e){this.selectedCounty=e?e[0]:""}}},d=u,v=(i("8baf"),i("2877")),f=Object(v["a"])(d,c,o,!1,null,null,null),C=f.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.clickAirCard}},[i("div",{staticClass:"airQualityName"},[t._v(t._s(t.airQuality.name))]),i("div",{staticClass:"airQualityAQI",class:t._f("aqiClass")(t.airQuality.aqi)},[t._v(t._s(t.airQuality.aqi))])])},_=[],h={name:"SiteAirCard",props:["airQuality"],methods:{clickAirCard:function(){this.$emit("clickAirCard",this.airQuality)}}},y=h,m=(i("d32a"),Object(v["a"])(y,p,_,!1,null,null,null)),b=m.exports,g={name:"App",components:{Header:C,SiteAirCard:b},data:function(){return{dataset:[],counties:[],selectedCounty:"",selectedsiteCard:void 0}},mounted:function(){var t=this;l["get"]("https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json").then((function(t){return t.data.records})).then((function(e){e.forEach((function(e){t.dataset.push({name:e.SiteName,county:e.County,aqi:e.AQI,status:e.Status}),-1===t.counties.indexOf(e.County)&&t.counties.push(e.County)})),t.selectedCounty=t.counties[0],t.selectedsiteCard=t.filteredDataset[0]}))},computed:{filteredDataset:function(){var t=this;return this.dataset.filter((function(e){return e.county&&e.county===t.selectedCounty}))}},methods:{onCountyChange:function(t){this.selectedCounty=t,this.selectedsiteCard=this.filteredDataset[0]},clickAirCard:function(t){this.selectedsiteCard=t}}},A=g,O=(i("034f"),Object(v["a"])(A,n,r,!1,null,null,null)),j=O.exports,w={level1:"level1",level2:"level2",level3:"level3",level4:"level4",level5:"level5",level6:"level6"};s["a"].config.productionTip=!1,s["a"].filter("aqiClass",(function(t){var e="";return e=t>=0&&t<=50?w.level1:t>50&&t<=100?w.level2:t>100&&t<=150?w.level3:t>150&&t<=200?w.level4:t>200&&t<=300?w.level5:w.level6,console.log(Object(a["a"])(t),t,e),e})),new s["a"]({render:function(t){return t(j)}}).$mount("#app")},6860:function(t,e,i){},"7c24":function(t,e,i){},"85ec":function(t,e,i){},"8baf":function(t,e,i){"use strict";var a=i("6860"),s=i.n(a);s.a},d32a:function(t,e,i){"use strict";var a=i("7c24"),s=i.n(a);s.a}});
//# sourceMappingURL=app.bc604cca.js.map