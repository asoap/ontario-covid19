_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("HALo"),i=a("z7pX"),r=a("vJKn"),o=a.n(r),s=a("rg98"),l=a("q1tI"),u=a.n(l),c=a("iae6"),d=a("ofer"),h=a("7oih"),p=a("YFqc"),f=a.n(p),v=a("R/WZ"),g=a("kKAo"),m=u.a.createElement,_=Object(v.a)({paper:{margin:16,padding:16,display:"inline-block",maxWidth:584,width:"100%",verticalAlign:"top"}}),b=function(e){var t=e.title,a=e.children,n=_();return m(g.a,{className:n.paper},t&&m(d.a,{variant:"h6"},t),a)},w=u.a.createElement,y=[{date:"2021/04/09",update:w("span",null,"Using adult population for vaccine percentages ",w(f.a,{href:"/vaccinations"},"here"),".")},{date:"2021/04/09",update:w("span",null,'Added "Variants of concern" cases to table and Total cases plot. This data seems to be lagging, so I cannot calculate the daily change.')},{date:"2021/03/28",update:w("span",null,"Moved ",w(f.a,{href:"/vaccinations"},"vaccination charts")," to a new page.")},{date:"2021/03/27",update:w("span",null,"Added ",w(f.a,{href:"/stats"},"a page")," to show case statistics.")},{date:"2021/03/14",update:"Added plot showing total people fully vaccinated."},{date:"2021/03/14",update:"Making things a little prettier."},{date:"2021/03/10",update:w("span",null,"Added ",w(f.a,{href:"/phus"},"a page")," to filter stats by public health unit (PHU).")},{date:"2021/03/07",update:w("span",null,"Added some features to the Summary table and added a 7 day moving average for daily vaccines. Thanks"," ",w("a",{href:"https://github.com/IsaacBerman",target:"_blank",rel:"noopener noreferrer"},"IsaacBerman")," ","for the pull requests!")},{date:"2021/02/20",update:"Added a plot showing daily vaccinations."},{date:"2021/02/07",update:w("span",null,"Some minor prettifications. Thanks"," ",w("a",{href:"https://github.com/TikiTDO",target:"_blank",rel:"noopener noreferrer"},"TikiTDO")," ","for the pull requests!")}],k=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],n=Object(l.useState)(!1),i=n[0],r=n[1];Object(l.useEffect)((function(){a(i?y:y.slice(0,3))}),[i]);return w(b,{title:"Recent updates"},w("ul",null,t.map((function(e,t){var a=e.date,n=e.update;return w("li",{key:t},w("strong",null,a)," ",n)}))),w("div",{className:"blue hover-dark-blue pointer",onClick:function(){return r(!i)}},i?"Show less":"Show all"))},C=a("XkeK"),O=u.a.createElement,D=function(e){return e?e.toLocaleString():""},T=function(e){return"".concat(e>=0?"+":"").concat(D(e))},I=[{label:"Date",key:"date_string"},{label:"Active cases",key:"active_cases",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_active_cases",formatValue:T,highlight:"negative"},{label:"Total cases",key:"Total Cases",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_cases",formatValue:T,highlight:"negative"},{label:"Deaths",key:"Deaths",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_deaths",formatValue:T,highlight:"negative"},{label:"Patients hospitalized",key:"Number of patients hospitalized with COVID-19",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_hospital",formatValue:T,highlight:!0},{label:"Patients in ICU",key:"Number of patients in ICU due to COVID-19",formatValue:D,align:"right",headerColSpan:2},{label:"",key:"new_icu",formatValue:T,highlight:"negative"},{label:"Variants of concern cases",key:"vocsTotal",formatValue:D}],V=function(e){var t=e.dataSource,a=void 0===t?[]:t;return O(C.a,{title:"Status of cases in Ontario",data:a,columns:I})},S=a("Cmmz"),N=u.a.createElement,j=function(){return N(b,{title:"About"},N("ul",null,N("li",null,"Summaries and visualizations of Covid-19 data taken from"," ",N("a",{href:"https://data.ontario.ca/dataset?keywords_en=COVID-19",target:"_blank",rel:"noopener noreferrer"},"Ontario's data catalogue"),"."),N("li",null,"I've been maintaining this dashboard for over a year now! If you've gotten value from it, consider"," ",N("a",{href:"https://www.buymeacoffee.com/russellpollari"},"buying me a coffee"),"."),N("li",null,"Want to contribute and make it better? Fork it on ",N("a",{href:"https://github.com/Russell-Pollari/ontario-covid19"},"GitHub"),".")))},E=a("StWE"),R=function(){return new Promise((function(e){Object(E.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000",(function(t){var a=t.result.records;a.sort((function(e,t){return new Date(e["Reported Date"])-new Date(t["Reported Date"])}));var n=[0,0,0,0,0,0,0],i=[0,0,0,0,0,0,0],r=[0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0],s=0,l=0,u=0,c=0,d=0,h=0;a.map((function(e){e.new_cases=e["Total Cases"]-s,e.new_deaths=Math.max(e.Deaths-l,0),e.icu_no_ventilator=e["Number of patients in ICU due to COVID-19"]-e["Number of patients in ICU on a ventilator due to COVID-19"],e.date_string=new Date(e["Reported Date"]).toLocaleString("en-us",{month:"short",day:"numeric"}),e.active_cases=e["Total Cases"]-e.Resolved-e.Deaths,e.new_active_cases=e.active_cases-u,e.new_resolved=e.Resolved-c,e.new_hospital=e["Number of patients hospitalized with COVID-19"]-d,e.new_icu=e["Number of patients in ICU due to COVID-19"]-h,e.percent_positive=(e.new_cases/e["Total tests completed in the last day"]*100).toFixed(2),(e.percent_positive>100||isNaN(e.percent_positive))&&(e.percent_positive=0),o.shift(),o.push(Number(e.percent_positive||0)),e.tests_positive_rolling_average=(o.reduce((function(e,t){return t+e}),0)/7).toFixed(2),r.shift(),r.push(e["Total tests completed in the last day"]||0),e.tests_rolling_average=Math.round(r.reduce((function(e,t){return t+e}),0)/7),n.shift(),n.push(e.new_cases);var t=n.reduce((function(e,t){return t+e}),0);e.new_cases_rolling_average=Math.round(t/7),i.shift(),i.push(e.new_deaths);var a=i.reduce((function(e,t){return t+e}),0);return e.new_deaths_rolling_average=Math.round(a/7),h=e["Number of patients in ICU due to COVID-19"],d=e["Number of patients hospitalized with COVID-19"],s=e["Total Cases"],l=e.Deaths,c=e.Resolved,u=e.active_cases,e.vocsTotal=e["Total_Lineage_B.1.1.7"]+e["Total_Lineage_B.1.351"]+e["Total_Lineage_P.1"],e.totalNonVOC=e["Total Cases"]-e.vocsTotal,e})),e(a)}))}))},A=a("mPjd"),P=u.a.createElement;t.default=function(){var e=Object(l.useState)([]),t=e[0],a=e[1],r=Object(l.useState)(!0),u=r[0],p=r[1],f=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().then(a);case 2:p(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){f()}),[]);var v=[{title:"Summary",href:"#"}].concat(Object(i.a)(A.b.map((function(e){return{title:e.title,href:"#".concat(e.title)}}))));return P(h.a,{menuItems:v},P(d.a,{variant:"h4"},"Covid-19 in Ontario"),P(j,null),P(k,null),u?P("p",{className:"tc"},P("strong",null,"Hold tight.. just fetching the latest data"),P("div",null,P(c.a,null))):P(l.Fragment,null,P(V,{dataSource:t}),A.b.map((function(e,a){return P(S.a,Object(n.a)({key:a,dataSource:t,syncId:"syncCharts"},e))}))))}},rg98:function(e,t,a){"use strict";function n(e,t,a,n,i,r,o){try{var s=e[r](o),l=s.value}catch(u){return void a(u)}s.done?t(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,r){var o=e.apply(t,a);function s(e){n(o,i,r,s,l,"next",e)}function l(e){n(o,i,r,s,l,"throw",e)}s(void 0)}))}}a.d(t,"a",(function(){return i}))},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RXBc")}])}},[["vlRD",0,2,1,3,4,5,6]]]);