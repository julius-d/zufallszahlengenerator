(this.webpackJsonpzufallszahlengenerator=this.webpackJsonpzufallszahlengenerator||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(41),r=n.n(o),i=(n(54),n(55),n(56),n(42)),s=n(49),c=n(19),l=n(20),h=n(22),u=n(21),d=(n(57),n(97)),j=n(98),b=n(99),m=n(104),f=n(100),g=n(102),v=n(101),x=n(103),O=(n(58),n(4)),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.randomNumbers.length;return Object(O.jsx)("div",{className:"Results",children:this.props.randomNumbers.map((function(t,n){return Object(O.jsx)("div",{children:Object(O.jsx)("strong",{className:0===n?"newest-result":"",children:t})},e-n)}))})}}]),n}(a.Component),w=1e9,N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={randomNumbers:[],minValue:1,maxValue:32,lotto:!1},e}return Object(l.a)(n,[{key:"generateRandomNumbers",value:function(){var e,t=0;do{t++,e=n.getRandomInt(this.state.minValue,this.state.maxValue)}while(this.state.lotto&&t<1e4&&this.state.randomNumbers.indexOf(e)>=0);this.setState({randomNumbers:[e].concat(Object(s.a)(this.state.randomNumbers))})}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.value;n=parseInt(n,10),isNaN(n)||n<0?n="":n>w&&(n=w);var a=t.name;this.setState(Object(i.a)({},a,n))}},{key:"onChangeLotto",value:function(e){var t=e.target.checked;this.setState({lotto:t})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)("h1",{className:"App-title",children:"Zufallszahlengenerator"})}),Object(O.jsx)(d.a,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(b.a,{xs:4,children:Object(O.jsxs)(m.a,{controlId:"min",bsSize:"large",children:[Object(O.jsx)(f.a,{children:"Min"})," ",Object(O.jsx)(g.a,{name:"minValue",type:"number",value:this.state.minValue,onChange:this.handleInputChange.bind(this)})]})}),Object(O.jsx)(b.a,{xs:4,children:Object(O.jsxs)(m.a,{controlId:"max",bsSize:"large",children:[Object(O.jsx)(f.a,{children:"Max"})," ",Object(O.jsx)(g.a,{name:"maxValue",type:"number",value:this.state.maxValue,onChange:this.handleInputChange.bind(this)})]})}),Object(O.jsx)(b.a,{xs:4,children:Object(O.jsxs)(m.a,{controlId:"lotto",bsSize:"large",children:[Object(O.jsx)(f.a,{children:"Jede Zahl nur einmal"})," ",Object(O.jsx)(v.a,{id:"lotto",value:this.state.lotto,onChange:this.onChangeLotto.bind(this)})]})}),Object(O.jsx)(b.a,{xs:12,children:Object(O.jsx)(x.a,{onClick:this.generateRandomNumbers.bind(this),bsStyle:"primary",bsSize:"large",block:!0,children:this.state.lotto?"Zahl ziehen":"W\xfcrfeln"})})]})}),Object(O.jsx)(p,{randomNumbers:this.state.randomNumbers})]})}}],[{key:"getRandomInt",value:function(e,t){return t+=1,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(O.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/zufallszahlengenerator",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/zufallszahlengenerator","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[95,1,2]]]);
//# sourceMappingURL=main.fb4c5566.chunk.js.map