_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+MOk":function(e,a,t){"use strict";t.r(a);var n=t("HALo"),i=t("vJKn"),s=t.n(i),r=t("rg98"),o=t("q1tI"),l=t.n(o),d=t("iae6"),c=t("ofer"),f=t("cpVT");var u=t("8rE2");function y(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,i=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(l){i=!0,s=l}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return t}}(e,a)||Object(u.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=t("StWE"),v="https://data.ontario.ca/api/3/action/datastore_search?resource_id=455fd63b-603d-4608-8216-7d8647f43350&fields=Outcome1,Accurate_Episode_Date,Age_Group&limit=1000000",_=["<20","20s","30s","40s","50s","60s","70s","80s","90+"],p=function(){var e={};return _.forEach((function(a){e[a]={ageGroup:a,total:0,deceased:0,resolved:0,active:0}})),e},b=function(e){var a=p(),t={};return e.forEach((function(e){var n=e.Age_Group;if("UNKNOWN"!==n){var i=e.Accurate_Episode_Date.substring(0,7);t[i]||(t[i]=p());var s=a[n],r=t[i][n];s.total+=1,r.total+=1,"Fatal"===e.Outcome1?(s.deceased+=1,r.deceased+=1):"Resolved"===e.Outcome1?(s.resolved+=1,r.resolved+=1):(s.active+=1,r.active+=1)}})),{totalByAge:_.map((function(e){return a[e]})),monthyByAge:Object.entries(t).sort((function(e,a){var t=y(e,1)[0],n=y(a,1)[0];return new Date(t)-new Date(n)})).map((function(e){var a=y(e,2),t=a[0],n=a[1],i={month:t};return Object.values(n).forEach((function(e){var a=e.ageGroup,t=e.total,n=e.deceased,s=e.resolved,r=e.active;i["".concat(a,"-total")]=t,i["".concat(a,"-deceased")]=n,i["".concat(a,"-resolved")]=s,i["".concat(a,"-active")]=r})),i}))}},g="undefined"!==typeof Storage,k="CACHED_getCaseDataResult",K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a;return new Promise((function(a){if(g){var t=new Date,n=localStorage.getItem(k);if(n){var i=JSON.parse(n);if(t.getTime()<=i.expiry&&i.ageData&&i.v3)return console.log("Using cached result data localStorage. Clear storage key ".concat(k," to reset.")),void a(i.ageData)}e(v,(function(e){var n,i=b(e.result.records),s=new Date(t);s.setHours(t.getHours()+8),localStorage.setItem(k,JSON.stringify((n={},Object(f.a)(n,"v3",!0),Object(f.a)(n,"expiry",s.getTime()),Object(f.a)(n,"ageData",i),n))),a(i)}))}else e(v,(function(e){var t=b(e.result.records);a(t)}))}))},h=t("Cmmz"),w=t("Anlk"),I=t("mPjd"),O=l.a.createElement;a.default=function(){var e=Object(o.useState)([]),a=e[0],t=e[1],i=Object(o.useState)([]),f=i[0],u=i[1],y=Object(o.useState)(!0),m=y[0],v=y[1],_=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K().then((function(e){t(e.totalByAge),u(e.monthyByAge)}));case 2:v(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){_()}),[]),O(w.a,{title:"Case statistics"},O(c.a,{variant:"h6"},"Some statistics on Covid-19 cases in Ontario"),m?O("div",{className:"tc"},O(d.a,null),O("p",null,"Hang tight. Just fetching and compiling the data")):O(l.a.Fragment,null,O(h.a,Object(n.a)({dataSource:a,xAxisScale:"band"},I.a)),I.b.map((function(e,a){return O(h.a,Object(n.a)({key:a,dataSource:f},e))}))))}},"/NAY":function(e,a,t){"use strict";a.a={casesByVax:1,hospitalByVax:2,icuByVax:3,totalDoses:4,totalVaccinated:5,vaccinatedByAge:6,dailyDoses:7}},"9Rzn":function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("q1tI")),s=(0,n(t("8/g6")).default)(i.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined");a.default=s},Anlk:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("YFqc"),r=t.n(s),o=t("bXiM"),l=t("5CWz"),d=t("PsDL"),c=t("lO0E"),f=t("ofer"),u=t("9Rzn"),y=t.n(u),m=t("Ji2X"),v=t("R/WZ"),_=t("BomS"),p=i.a.createElement,b=Object(v.a)((function(e){return{toolbar:e.mixins.toolbar,main:{padding:16},appBar:{flexGrow:1},title:{flexGrow:1}}}));a.a=function(e){var a=e.title,t=e.children,n=b();return p("div",null,p(l.a,null),p(o.a,{position:"fixed",className:n.appBar},p(c.a,null,p(d.a,{color:"inherit",edge:"start"},p(r.a,{href:"/"},p(y.a,null))),p(f.a,{variant:"h6",noWrap:!0,className:n.title},a),p(_.a,null))),p("main",{className:n.main},p("div",{className:n.toolbar}),p(m.a,null,t)))}},cpVT:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},mPjd:function(e,a,t){"use strict";t.d(a,"c",(function(){return k})),t.d(a,"e",(function(){return K})),t.d(a,"a",(function(){return h})),t.d(a,"b",(function(){return w})),t.d(a,"d",(function(){return I}));var n={title:"New cases",dataKeyX:"date_string",bars:[{dataKey:"new_cases",name:"New cases",fill:"#f9d45c"}],lines:[{dataKey:"new_cases_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},i={title:"Active cases",dataKeyX:"date_string",bars:[{dataKey:"active_cases",fill:"#f9d45c",name:"Active cases",stackId:"a"}]},s={title:"Total cases",dataKeyX:"date_string",areas:[{dataKey:"vocsTotal",fill:"#ef8c8c",stroke:"#ef8c8c",name:"Variants of concern",stackId:"a"},{dataKey:"totalNonVOC",fill:"#f9d45c",stroke:"#f9d45c",name:"Vanilla cases",stackId:"a"}]},r={title:"New deaths",dataKeyX:"date_string",bars:[{dataKey:"new_deaths",name:"New deaths",fill:"#ef8c8c"}],lines:[{dataKey:"new_deaths_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},o={title:"Total deaths",dataKeyX:"date_string",areas:[{dataKey:"Deaths",name:"Total deaths",fill:"#ef8c8c"}]},l={title:"Patients hospitalized",dataKeyX:"date_string",bars:[{dataKey:"Number of patients hospitalized with COVID-19",name:"Patients hospitalized",fill:"#ef8c8c"}]},d={title:"Patients in ICU",dataKeyX:"date_string",bars:[{dataKey:"Number of patients in ICU on a ventilator due to COVID-19",fill:"#509ee3",name:"ICU (with ventilator)",stackId:"a"},{dataKey:"icu_no_ventilator",fill:"#7172ad",name:"ICU (no ventilator)",stackId:"a"}]},c={title:"New tests",dataKeyX:"date_string",bars:[{dataKey:"Total tests completed in the last day",name:"New tests",fill:"#509ee3"}],lines:[{dataKey:"Under Investigation",name:"Pending tests",dot:!1,strokeWidth:2,stroke:"teal"},{dataKey:"tests_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},f={title:"Percent positive",dataKeyX:"date_string",bars:[{dataKey:"percent_positive",name:"Percent positive",fill:"#509ee3"}],lines:[{dataKey:"tests_positive_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},u=t("/NAY"),y={id:u.a.totalDoses,dataKeyX:"date_string",title:"Total vaccines administered",areas:[{dataKey:"total_doses_administered",name:"Total doses administered",fill:"#509ee3"}]},m={id:u.a.dailyDoses,dataKeyX:"date_string",title:"Daily vaccines administered",bars:[{dataKey:"previous_day_first_doses_administered",name:"Daily first doses administered",fill:"#509ee3"},{dataKey:"previous_day_second_doses_administered",name:"Daily second doses administered",fill:"#82ca9d"},{dataKey:"previous_day_one_shot_doses_administered",name:"Daily one-shot doses administered",fill:"#ca82c8"}],lines:[{dataKey:"new_vaccines_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},v={id:u.a.totalVaccinated,dataKeyX:"date_string",title:"Total people fully vaccinated",areas:[{dataKey:"total_individuals_fully_vaccinated",name:"Total people fully vaccinated",fill:"#509ee3"}]},_={id:u.a.vaccinatedByAge,dataKeyX:"Agegroup",title:"Vaccination rate by age group",bars:[{dataKey:"Percent_fully_vaccinated",name:"Fully vaccinated",fill:"#82ca9d"},{dataKey:"percent_partially_vaccinated",name:"Partially vaccinated",fill:"#509ee3"},{dataKey:"percent_not_vaccinated",name:"Not vaccinated",fill:"#c9c9c9"}]},p={id:u.a.casesByVax,dataKeyX:"date",title:"Cases by vaccination status (per million)",areas:[{dataKey:"cases_full_vax_per_mil",name:"Fully Vaccinated",stroke:"#82ca9d",fill:"#82ca9d",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"cases_partial_vax_per_mil",name:"Partially Vaccinated",stroke:"#f5b042",fill:"#f5b042",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"cases_unvax_per_mil",name:"Not Vaccinated",stroke:"#eb4034",fill:"#eb4034",strokeWidth:2,stackId:1,type:"monotone"}]},b={id:u.a.hospitalByVax,dataKeyX:"date",title:"Hospital occupancy by vaccination status (per million)",areas:[{dataKey:"hosp_full_vax_per_mil",name:"Fully Vaccinated",stroke:"#82ca9d",fill:"#82ca9d",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"hosp_partial_vax_per_mil",name:"Partially Vaccinated",stroke:"#f5b042",fill:"#f5b042",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"hosp_unvax_per_mil",name:"Not Vaccinated",stroke:"#eb4034",fill:"#eb4034",strokeWidth:2,stackId:1,type:"monotone"}]},g={id:u.a.icuByVax,dataKeyX:"date",title:"ICU occupancy by vaccination status (per million)",areas:[{dataKey:"icu_full_vax_per_mil",name:"Fully Vaccinated",stroke:"#82ca9d",fill:"#82ca9d",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"icu_partial_vax_per_mil",name:"Partially Vaccinated",stroke:"#f5b042",fill:"#f5b042",strokeWidth:2,stackId:1,type:"monotone"},{dataKey:"icu_unvax_per_mil",name:"Not Vaccinated",stroke:"#eb4034",fill:"#eb4034",strokeWidth:2,stackId:1,type:"monotone"}]},k=[i,s,n,o,r,c,f,l,d],K=[p,b,g,m,_,y,v],h={title:"Cases by age group",dataKeyX:"ageGroup",bars:[{dataKey:"deceased",fill:"#ef8c8c",name:"Deceased",stackId:"a"},{dataKey:"active",fill:"#f9d45c",name:"Active",stackId:"a"},{dataKey:"resolved",fill:"green",name:"Resolved",stackId:"a"}]},w=[{title:"Deaths by age group 0-50s",dataKeyX:"month",lines:[{dataKey:"<20-deceased",fill:"#21660b",stroke:"#21660b",name:"<20"},{dataKey:"20s-deceased",fill:"#5f884a",stroke:"#5f884a",name:"20s"},{dataKey:"30s-deceased",fill:"#5b796a",stroke:"#5b796a",name:"30s"},{dataKey:"40s-deceased",fill:"#737a69",stroke:"#737a69",name:"40s"},{dataKey:"50s-deceased",fill:"#000000",stroke:"#000000",name:"50s"}]},{title:"Deaths by age group 50s-90s+",dataKeyX:"month",lines:[{dataKey:"50s-deceased",fill:"#000000",stroke:"#000000",name:"50s"},{dataKey:"60s-deceased",fill:"#3d3cff",stroke:"#3d3cff",name:"60s"},{dataKey:"70s-deceased",fill:"#9552f9",stroke:"#9552f9",name:"70s"},{dataKey:"80s-deceased",fill:"#20e0ff",stroke:"#20e0ff",name:"80s"},{dataKey:"90+-deceased",fill:"#de425b",stroke:"#de425b",name:"90+"}]},{title:"All monthly recoveries",dataKeyX:"month",lines:[{dataKey:"<20-resolved",fill:"#21660b",stroke:"#21660b",name:"<20"},{dataKey:"20s-resolved",fill:"#5f884a",stroke:"#5f884a",name:"20s"},{dataKey:"30s-resolved",fill:"#5b796a",stroke:"#5b796a",name:"30s"},{dataKey:"40s-resolved",fill:"#737a69",stroke:"#737a69",name:"40s"},{dataKey:"50s-resolved",fill:"#000000",stroke:"#000000",name:"50s"},{dataKey:"60s-resolved",fill:"#3d3cff",stroke:"#3d3cff",name:"60s"},{dataKey:"70s-resolved",fill:"#9552f9",stroke:"#9552f9",name:"70s"},{dataKey:"80s-resolved",fill:"#20e0ff",stroke:"#20e0ff",name:"80s"},{dataKey:"90+-resolved",fill:"#de425b",stroke:"#de425b",name:"90+"}]}],I={title:"Effective reproduction number",dataKeyX:"date_string",xLabel:"Week of",lines:[{dataKey:"Re",name:"Re",errorBarKey:"error_bars",dot:!1,stroke:"black"},{dataKey:function(){return 1},name:"Re = 1",dot:!1}]}},zorG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return t("+MOk")}])}},[["zorG",0,2,1,3,4]]]);