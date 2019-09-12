(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"294e":function(t,e,n){"use strict";var a=n("83d4"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Banner"),n("v-content",[n("Map")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("JTF-70 Live Server")])]),n("v-spacer"),n("div",[t._v("Alpha 0.2")])],1)},s=[],c={name:"Banner"},l=c,p=n("2877"),u=n("6544"),f=n.n(u),d=n("40dc"),m=n("2fa4"),h=n("2a7f"),v=Object(p["a"])(l,i,s,!1,null,"9a478686",null),_=v.exports;f()(v,{VAppBar:d["a"],VSpacer:m["a"],VToolbarTitle:h["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"map",attrs:{id:"map",fluid:!0,"fill-height":!0}},[n("v-card",{directives:[{name:"show",rawName:"v-show",value:t.active_pilots,expression:"active_pilots"}],staticClass:"elevation-1",attrs:{id:"roster"}},[n("v-subheader",{staticClass:"subtitle-2",attrs:{id:"header"}},[t._v("Active Pilots")]),n("v-list",t._l(t.active_pilots,function(e,a){return n("v-list-item",{key:a,on:{click:function(e){return t.center_on_pilot(a,t.current)}}},[t._v(t._s(e))])}),1)],1)],1)},y=[],g=n("2f62"),S=n("e11e"),O=n.n(S),w=n("d61f"),C=n.n(w);class E{constructor(t){let e={tile_provider:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",tile_options:{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:4,maxZoom:18}};this.container_id=t,this.map=O.a.map(this.container_id).setView([0,0],0),O.a.tileLayer(e.tile_provider,e.tile_options).addTo(this.map),this.focused=!1,this.marker_layer=O.a.featureGroup().addTo(this.map)}update_icons(t){this.marker_layer.clearLayers();for(let e in t)this.plot_icons(t[e]);this.focused||this.focus()}plot_icons(t){let e=new C.a.Symbol(T[t.states.Type["level1"]][t.states.CoalitionID],{size:20,direction:t.states.Heading*(180/Math.PI),altitudeDepth:10*Math.round(3.28084*t.states.LatLongAlt.Alt/10),additionalInformation:t.states.Name}),n=O.a.divIcon({className:"",html:e.asSVG(),iconAnchor:new O.a.Point(e.getAnchor().x,e.getAnchor().y)});O.a.marker([t.states.LatLongAlt.Lat,t.states.LatLongAlt.Long],{icon:n}).addTo(this.marker_layer)}focus(){try{let e=this.marker_layer.getBounds();this.map.flyToBounds(e,{padding:O.a.point(20,20)}),this.focused=!0}catch(t){}}center_on_point(t){this.map.flyTo(t,12)}}let T={1:{1:"SHAP--------",2:"SFAP--------"},2:{1:"SHGPU-------",2:"SFGPU-------"},3:{1:"SHSP--------",2:"SFSP--------"},4:{1:"SHAPW-------",2:"SFAPW-------"},5:{1:"SHGPI-----H-",2:"SFGPI-----H-"}};var P={name:"Map",computed:{...Object(g["c"])(["current"]),...Object(g["b"])(["active_pilots"])},data:function(){return{map:null}},mounted:function(){this.initMap()},methods:{initMap(){this.map||(this.map=new E("map"))},center_on_pilot(t,e){let n=e[t],a=[n.states.LatLongAlt.Lat,n.states.LatLongAlt.Long];this.map.center_on_point(a)}},watch:{current:function(){this.map.update_icons(this.current)}}},A=P,L=(n("294e"),n("b0af")),k=n("a523"),M=n("8860"),j=n("da13"),x=n("e0c7"),N=Object(p["a"])(A,b,y,!1,null,"756a92e6",null),V=N.exports;f()(N,{VCard:L["a"],VContainer:k["a"],VList:M["a"],VListItem:j["a"],VSubheader:x["a"]});var H={name:"App",components:{Banner:_,Map:V},data:()=>({})},R=H,G=n("7496"),I=n("a75b"),B=Object(p["a"])(R,r,o,!1,null,null,null),F=B.exports;f()(B,{VApp:G["a"],VContent:I["a"]});var K=n("b408"),$=n.n(K);function J(t){const e=t;let n=e.replace(new RegExp("}{","gi"),"}\n{").split("\n");return""===n[-1]&&n[-1].pop(),n}a["a"].use(g["a"]);const D=new g["a"].Store({state:{socket:{isConnected:!1,message:"",reconnectError:!1},current:{},buffer:{},sim_time:-1,active:{}},getters:{active_pilots:function(t){let e={};for(let n in t.current)t.current[n].states.Flags.Human&&(e[n]=t.current[n].states.UnitName);return Object.keys(e).length>0?e:null}},mutations:{SOCKET_ONOPEN(t,e){a["a"].prototype.$socket=e.currentTarget,t.socket.isConnected=!0},SOCKET_ONCLOSE(t,e){a["a"].prototype.$socket=e.currentTarget,t.socket.isConnected=!1},SOCKET_ONERROR(t,e){console.error(t,e)},SOCKET_ONMESSAGE(t,e){let n,a=J(e.data);for(let r of a){n=JSON.parse(r);let e=Object.keys(n)[0];n=n[e],t.sim_time!==n.sim_time&&(t.sim_time=n.sim_time,t.current=t.buffer,t.buffer={}),t.buffer[e]=n}},SOCKET_RECONNECT(t,e){console.log(t,e)},SOCKET_RECONNECT_ERROR(t){t.socket.reconnectError=!0}},actions:{}});a["a"].use($.a,"ws://173.234.25.42:8082",{store:D});var U=n("f309");a["a"].use(U["a"]);var W=new U["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({vuetify:W,store:D,render:t=>t(F)}).$mount("#app")},"83d4":function(t,e,n){}});
//# sourceMappingURL=app.96ffe2ce.js.map