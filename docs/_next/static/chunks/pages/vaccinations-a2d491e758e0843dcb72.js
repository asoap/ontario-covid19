_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"7Xy9":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vaccinations",function(){return t("t8Fg")}])},t8Fg:function(e,a,t){"use strict";t.r(a);var n=t("HALo"),r=t("z7pX"),i=t("vJKn"),l=t.n(i),s=t("rg98"),u=t("q1tI"),o=t.n(u),c=t("iae6"),_=t("ofer"),d=t("7oih"),f=t("Cmmz"),v=t("uM61"),p=o.a.createElement,h=function(e){var a=e.data,t=void 0===a?[]:a;if(!t.length)return null;var n=t[t.length-1],r=n.total_individuals_fully_vaccinated,i=n.previous_day_at_least_one,l=n.total_individuals_3doses;return p(v.a,{title:"Vaccinations at a glance"},p("ul",null,p("li",null,p("strong",null,Math.round((i+r)/14010998*100*100)/100,"%")," ","of the ",p("em",null,"eligible")," population of Ontario has had at least one shot."),p("li",null,p("strong",null,Math.round(r/14010998*100*100)/100,"%")," ","of the ",p("em",null,"eligible")," population of Ontario has had at least two shots."),p("li",null,p("strong",null,Math.round(l/14010998*100*100)/100,"%")," ","of the ",p("em",null,"eligible")," population of Ontario has had three shots.")),p("div",{className:"mt16 f12"},p("em",null,"Eligible population"),": Everyone 5 and older based on estimates from Statistics Canada on July 1st 2020."))},m=t("XkeK"),g=o.a.createElement,y=function(e){return e?Number(e).toLocaleString():null},b=function(e){return e?"".concat(e>=0?"+":"").concat(y(e)):null},x=[{label:"Date",key:"date_string"},{label:"Total doses administered",key:"total_doses_administered",formatValue:y},{label:"Daily vaccines",key:"previous_day_total_doses_administered",formatValue:b,highlight:"positive"},{label:"7 day average",key:"new_vaccines_rolling_average",formatValue:b,highlight:"positive"},{label:"Total people fully vaccinated",key:"total_individuals_fully_vaccinated",formatValue:y,headerColSpan:"2"},{label:"",key:"previous_day_fully_vaccinated",formatValue:b,highlight:"positive"},{label:"Total people with 3 doses",key:"total_individuals_3doses",formatValue:y}],w=function(e){var a=e.dataSource,t=void 0===a?[]:a;return g(m.a,{title:"Status of Vaccinations in Ontario",data:t,columns:x})},D=o.a.createElement,O=function(e){return"".concat(e,"%")},S=[{label:" ",key:"type",isBold:!0},{label:"One Dose Effectiveness",key:"partial",formatValue:O,align:"center"},{label:"Two Dose Effectiveness",key:"full",formatValue:O,align:"center"}],E=function(e){var a=e.dataSource,t=void 0===a?[]:a,n=D(u.Fragment,null,"* Effectiveness was calculated using the method detailed by the ",D("a",{href:"https://www.cdc.gov/csels/dsepd/ss1978/lesson3/section6.html"},"CDC here"),". ",D("br",null),"* This Data is not age adjusted, which means the effectiveness is underestimated.");return D(m.a,{title:"Vaccine Effectiveness (last 7 days)",data:t,columns:S,paginationEnabled:!1,footnote:n})},j=t("StWE"),k=function(e){return"number"===typeof e?e:Number((e||"0").replace(/,/g,""))},P=function(){return new Promise((function(e){Object(j.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000",(function(a){var t=a.result.records;t.sort((function(e,a){return new Date(e.report_date)-new Date(a.report_date)}));for(var n=[0,0,0,0,0,0,0],r=[],i=1;i<t.length;i++){var l=t[i],s=new Date(l.report_date).getTime(),u=t[i-1];r.push(u);var o=new Date(u.report_date);for(o.setDate(o.getDate()+1);o.getTime()<s;){var c=Object.assign({},u,{report_date:o.toISOString().replace(/\.\d+Z/,"")});r.push(c),o.setDate(o.getDate()+1)}}r.push(t[t.length-1]),r.map((function(e){var a=e.report_date,t=e.total_doses_administered,r=e.previous_day_total_doses_administered,i=e.total_individuals_fully_vaccinated;e.date_string=new Date(a).toLocaleString("en-us",{month:"short",day:"numeric"}),e.total_doses_administered=k(t),e.previous_day_total_doses_administered=k(r),e.total_individuals_fully_vaccinated=k(i),e.previous_day_third_doses=r-k(e.previous_day_at_least_one)-k(e.previous_day_fully_vaccinated),n.shift(),n.push(e.previous_day_total_doses_administered);var l=n.reduce((function(e,a){return a+e}),0);return e.new_vaccines_rolling_average=Math.round(l/7),e})),e(r)}))}))},V=function(e){return"number"===typeof e?e:Number((e||"0").replace(/,/g,""))},N=function(){return new Promise((function(e){Object(j.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=775ca815-5028-4e9b-9dd4-6975ff1be021&limit=13&sort=_id desc",(function(a){var t=a.result,n=t.records.filter((function(e){return"Undisclosed_or_missing"!=e.Agegroup}));t.records.sort((function(e,a){return e._id-a._id})),t.records.map((function(e){var a=e.Agegroup,t=e.Percent_at_least_one_dose,n=e.Percent_fully_vaccinated;return e.Agegroup=function(e){switch(e){case"12-17yrs":return"12-17";case"18-29yrs":return"18-29";case"30-39yrs":return"30s";case"40-49yrs":return"40s";case"50-59yrs":return"50s";case"60-69yrs":return"60s";case"70-79yrs":return"70s";case"Adults_18plus":return"18+";case"Ontario_12plus":return"12+";case"Ontario_5plus":return"5+";case"05-11yrs":return"5-11yrs";default:return e}}(a),e.Percent_at_least_one_dose=100*V(t),e.Percent_fully_vaccinated=100*V(n),e.percent_partially_vaccinated=e.Percent_at_least_one_dose-e.Percent_fully_vaccinated,e.percent_not_vaccinated=100-e.Percent_at_least_one_dose,e})),e(n)}))}))},M=function(e){return"https://data.ontario.ca/api/3/action/datastore_search?resource_id=".concat(e,"&limit=100000")},T=function(e){return"number"===typeof e?e:Number((e||"0").replace(/,/g,""))},C=function(e){return"string"===typeof e?new Date(e).toLocaleDateString("en-US"):e instanceof Date?e.toLocaleDateString("en-US"):""},A=function(){var e=Object(s.a)(l.a.mark((function e(){var a,t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t=[],n=[],e.next=5,new Promise((function(e){var a=M("8a89caa9-511c-4568-af89-7f2174b4378c");Object(j.a)(a,(function(a){var t=a.result.records;t.sort((function(e,a){return new Date(e.report_date)-new Date(a.report_date)}));for(var n=[],r=1;r<t.length;r++){var i=t[r],l=new Date(i.report_date).getTime(),s=t[r-1];n.push(s);var u=new Date(s.report_date);for(u.setDate(u.getDate()+1);u.getTime()<l;){var o=Object.assign({},s,{report_date:u.toISOString().replace(/\.\d+Z/,"")});n.push(o),u.setDate(u.getDate()+1)}}n.push(t[t.length-1]);var c=[];n.forEach((function(e){var a=e.report_date,t=e.total_individuals_fully_vaccinated,n=e.total_individuals_at_least_one,r=new Date(a);r.setDate(r.getDate()+14);var i={date:C(r),full_vax_individuals:T(t),partial_vax_individuals:T(n)-T(t),unvax_individuals:14789778-T(n)};c.push(i)})),e(c)}))})).then((function(e){return a=e}));case 5:return e.next=7,new Promise((function(e){var a=M("274b819c-5d69-4539-a4db-f2950794138c");Object(j.a)(a,(function(a){var t=a.result,n=[];t.records.forEach((function(e){var a=e.date,t=e.icu_unvac,r=e.icu_partial_vac,i=e.icu_full_vac,l=e.hospitalnonicu_unvac,s=e.hospitalnonicu_partial_vac,u=e.hospitalnonicu_full_vac,o={date:C(a),icu_unvax:T(t),icu_partial_vax:T(r),icu_full_vax:T(i),hosp_unvax:T(l)+T(t),hosp_partial_vax:T(s)+T(r),hosp_full_vax:T(u)+T(i)};n.push(o)})),e(n)}))})).then((function(e){return t=e}));case 7:return e.next=9,new Promise((function(e){var a=M("eed63cf2-83dd-4598-b337-b288c0a89a16");Object(j.a)(a,(function(a){var t=a.result,n=[];t.records.forEach((function(e){var a=e.Date,t=e.covid19_cases_unvac,r=e.covid19_cases_partial_vac,i=e.covid19_cases_full_vac,l={date:C(a),cases_unvax:T(t),cases_partial_vax:T(r),cases_full_vax:T(i)};n.push(l)})),e(n)}))})).then((function(e){return n=e}));case 9:return e.abrupt("return",new Promise((function(e){var r=[];n.forEach((function(e){var n,i,l,s,u,o,c,_,d,f,v=e.date,p=t.find((function(e){return e.date==v})),h=a.find((function(e){return e.date==v})),m=e.cases_unvax/h.unvax_individuals*1e6,g=e.cases_partial_vax/h.partial_vax_individuals*1e6,y=e.cases_full_vax/h.full_vax_individuals*1e6,b=100*(1-g/m),x=100*(1-y/m);null!=p&&(n=p.hosp_unvax/h.unvax_individuals*1e6,s=100*(1-(i=p.hosp_partial_vax/h.partial_vax_individuals*1e6)/n),u=100*(1-(l=p.hosp_full_vax/h.full_vax_individuals*1e6)/n),o=p.icu_unvax/h.unvax_individuals*1e6,d=100*(1-(c=p.icu_partial_vax/h.partial_vax_individuals*1e6)/o),f=100*(1-(_=p.icu_full_vax/h.full_vax_individuals*1e6)/o));var w={date:new Date(v).toLocaleString("en-us",{month:"short",day:"numeric"}),cases_unvax_per_mil:m,cases_partial_vax_per_mil:g,cases_full_vax_per_mil:y,hosp_unvax_per_mil:n,hosp_partial_vax_per_mil:i,hosp_full_vax_per_mil:l,icu_unvax_per_mil:o,icu_partial_vax_per_mil:c,icu_full_vax_per_mil:_,cases_partial_effect:b,cases_full_effect:x,hosp_partial_effect:s,hosp_full_effect:u,icu_partial_effect:d,icu_full_effect:f};r.push(w)}));var i=0,l=0,s=0,u=0,o=0,c=0,_=r.filter((function(e){return null!=e.hosp_unvax_per_mil})).slice(-7);r.slice(-7).forEach((function(e){o+=e.cases_partial_effect,c+=e.cases_full_effect})),_.forEach((function(e){i+=e.icu_partial_effect,l+=e.icu_full_effect,s+=e.hosp_partial_effect,u+=e.hosp_full_effect}));var d=Math.round(i/7),f=Math.round(l/7),v=Math.round(s/7),p=Math.round(u/7),h=Math.round(o/7),m=Math.round(c/7);e({all:r,avg:[{type:"ICU",partial:d,full:f},{type:"Hospitalization",partial:v,full:p},{type:"Cases",partial:h,full:m}]})})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=t("mPjd"),X=t("/NAY"),B=o.a.createElement;a.default=function(){var e=Object(u.useState)([]),a=e[0],t=e[1],i=Object(u.useState)([]),o=i[0],v=i[1],p=Object(u.useState)({}),m=p[0],g=p[1],y=Object(u.useState)(!0),b=y[0],x=y[1],D=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().then(v);case 2:return e.next=4,P().then(t);case 4:return e.next=6,A().then(g);case 6:x(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){D()}),[]);var O=[{title:"Summary",href:"#"}].concat(Object(r.a)(L.e.map((function(e){var a=e.title;return{title:a,href:"#".concat(a)}})))),S=function(e){switch(e){case X.a.vaccinatedByAge:return o;case X.a.casesByVax:return m.all;case X.a.hospitalByVax:case X.a.icuByVax:return m.all.filter((function(e){return null!=e.hosp_unvax_per_mil}));case X.a.totalDoses:case X.a.totalVaccinated:case X.a.dailyDoses:return a;default:return[]}};return B(d.a,{menuItems:O},B("div",{className:"ph16"},B(_.a,{variant:"h4"},"Covid-19 Vaccinations in Ontario"),b?B("p",{className:"tc"},B("strong",null,"Hold tight.. just fetching the latest data"),B("div",null,B(c.a,null))):B(u.Fragment,null,B(h,{data:a}),B(w,{dataSource:a}),B(E,{dataSource:m.avg}),L.e.map((function(e,a){return B(f.a,Object(n.a)({key:a,dataSource:S(e.id)},e))})))))}}},[["7Xy9",0,2,1,3,4,5,6]]]);