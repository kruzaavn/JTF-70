(function(t){function e(e){for(var n,i,s=e[0],c=e[1],p=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3d76":function(t,e,r){"use strict";var n=r("7579"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Banner"),r("v-content",[r("Map")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v("JTF-70 Live Server")])]),r("v-spacer"),r("div",[t._v("Alpha 0.1")])],1)},s=[],c={name:"Banner"},p=c,l=r("2877"),u=r("6544"),f=r.n(u),d=r("40dc"),m=r("2fa4"),h=r("2a7f"),v=Object(l["a"])(p,i,s,!1,null,"ab7e8f44",null),_=v.exports;f()(v,{VAppBar:d["a"],VSpacer:m["a"],VToolbarTitle:h["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"map",attrs:{id:"map",fluid:!0,"fill-height":!0}})},y=[],O=r("2f62"),g=r("e11e"),S=r.n(g),w=r("d61f"),C=r.n(w);class E{constructor(t){let e={tile_provider:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",tile_options:{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:4,maxZoom:18}};this.container_id=t,this.map=S.a.map(this.container_id).setView([0,0],0),S.a.tileLayer(e.tile_provider,e.tile_options).addTo(this.map),this.focused=!1,this.marker_layer=S.a.featureGroup().addTo(this.map)}update_icons(t){this.marker_layer.clearLayers();for(let e in t)this.plot_icons(t[e]);this.focused||this.focus()}plot_icons(t){let e=new C.a.Symbol(T[t.states.CoalitionID],{size:20,direction:t.states.Heading*(180/Math.PI),altitudeDepth:10*Math.round(t.states.LatLongAlt.Alt/10),additionalInformation:t.states.Name}),r=S.a.divIcon({className:"",html:e.asSVG(),iconAnchor:new S.a.Point(e.getAnchor().x,e.getAnchor().y)});S.a.marker([t.states.LatLongAlt.Lat,t.states.LatLongAlt.Long],{icon:r}).addTo(this.marker_layer)}focus(){try{let e=this.marker_layer.getBounds();this.map.flyToBounds(e),this.focused=!0}catch(t){}}}let T={1:"SHAP--------",2:"SFAP--------"};var M={name:"Map",computed:Object(O["b"])(["current"]),data:function(){return{map:null}},mounted:function(){this.initMap()},methods:{initMap(){this.map||(this.map=new E("map"))}},watch:{current:function(){this.map.update_icons(this.current)}}},k=M,A=(r("3d76"),r("a523")),j=Object(l["a"])(k,b,y,!1,null,"de7b31de",null),x=j.exports;f()(j,{VContainer:A["a"]});var L={name:"App",components:{Banner:_,Map:x},data:()=>({})},N=L,P=r("7496"),R=r("a75b"),V=Object(l["a"])(N,a,o,!1,null,null,null),B=V.exports;f()(V,{VApp:P["a"],VContent:R["a"]});var K=r("b408"),$=r.n(K);n["a"].use(O["a"]);const I=new O["a"].Store({state:{socket:{isConnected:!1,message:"",reconnectError:!1},current:{},buffer:{},sim_time:-1},getters:{},mutations:{SOCKET_ONOPEN(t,e){n["a"].prototype.$socket=e.currentTarget,t.socket.isConnected=!0},SOCKET_ONCLOSE(t,e){n["a"].prototype.$socket=e.currentTarget,t.socket.isConnected=!1},SOCKET_ONERROR(t,e){console.error(t,e)},SOCKET_ONMESSAGE(t,e){let r;r=JSON.parse(e.data);let n=Object.keys(r)[0];r=r[n],t.sim_time!==r.sim_time&&(t.sim_time=r.sim_time,t.current=t.buffer,t.buffer={}),t.buffer[n]=r},SOCKET_RECONNECT(t,e){console.info(t,e)},SOCKET_RECONNECT_ERROR(t){t.socket.reconnectError=!0}},actions:{}});n["a"].use($.a,"ws://173.234.25.42:8082",{store:I});var G=r("f309");n["a"].use(G["a"]);var J=new G["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:J,store:I,render:t=>t(B)}).$mount("#app")},7579:function(t,e,r){}});
//# sourceMappingURL=app.2f550f1d.js.map