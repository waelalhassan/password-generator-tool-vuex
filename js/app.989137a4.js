(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/password-generator-tool-vuex/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"passGen"},[n("pass-generator")],1)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pass-generator"}},[n("h1",[t._v("Password Generator Tool")]),n("div",{staticClass:"password"},[n("span",{staticClass:"copied"},[t._v("Copied")]),n("p",{attrs:{id:"password"}},[t._v(" "+t._s(t.getPass)+" ")]),n("button",{staticClass:"btn-gen",on:{click:t.passGenerate}},[t._v("Generate")])]),n("div",{staticClass:"controls"},[n("h3",[t._v(" Password Length ")]),n("input",{attrs:{type:"range",id:"range",min:"1",max:"10",step:"1"},domProps:{value:t.getRangeVal},on:{input:t.range}}),t._m(0)]),n("div",{staticClass:"options"},[n("button",{staticClass:"btn-copy-pass",on:{click:t.copyPassword}},[t._v("Copy")])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("span",[t._v("4")]),n("span",[t._v("8")]),n("span",[t._v("12")]),n("span",[t._v("16")]),n("span",[t._v("20")]),n("span",[t._v("24")]),n("span",[t._v("28")]),n("span",[t._v("32")]),n("span",[t._v("36")]),n("span",[t._v("40")])])}],i={name:"passGenerator",computed:{getPass:function(){return this.$store.getters.getPass},getRangeVal:function(){return this.$store.getters.getRangeVal}},methods:{passGenerate:function(){return this.$store.commit("passGenerate")},range:function(t){return this.$store.commit("range",t.target.value)},copyPassword:function(){var t=document.querySelector("#password"),e=document.querySelector(".copied");return e.style.cssText="top: -40px; opacity: 1;",setTimeout((function(){e.style.cssText="top: 0; opacity: 0;"}),1e3),this.$store.commit("copyPassword",t)}}},u=i,p=(n("8768"),n("2877")),l=Object(p["a"])(u,s,c,!1,null,"743550c2",null),d=l.exports,f={name:"app",components:{"pass-generator":d}},h=f,g=(n("5c0b"),Object(p["a"])(h,r,o,!1,null,null,null)),v=g.exports,m=(n("99af"),n("a15b"),n("2f62"));a["a"].use(m["a"]);var _=new m["a"].Store({state:{password:"00000000000000",passLength:1,A_Z:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a_z:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],digits:["0","1","2","3","4","5","6","7","8","9"],metaChar:["~","!","@","#","$","%","^","&","*","_","+","/","\\","-","?","<",">"]},getters:{getPass:function(t){return t.password},getRangeVal:function(t){return t.passLength}},mutations:{passGenerate:function(t){for(var e=t.A_Z,n=t.a_z,a=t.digits,r=t.metaChar,o=[],s=[],c=[],i=[],u=5,p=0;p<u;p++){var l=Math.floor(Math.random()*e.length),d=e[l],f=Math.floor(Math.random()*n.length),h=n[f],g=Math.floor(Math.random()*a.length),v=a[g],m=Math.floor(Math.random()*r.length),_=r[m];o.push(d),s.push(h),c.push(v),i.push(_)}for(var y=[],b=t.passLength,w=0;w<b;w++){var M=Math.floor(Math.random()*o.length),P=o[M],x=Math.floor(Math.random()*s.length),C=s[x],O=Math.floor(Math.random()*c.length),j=c[O],S=Math.floor(Math.random()*i.length),$=i[S],G="".concat(P).concat(C).concat(j).concat($);y.push(G)}var R=y.join("");t.password=R},range:function(t,e){t.passLength=e},copyPassword:function(t,e){var n=e,a=document.createRange();a.selectNodeContents(n);var r=window.getSelection();r.removeAllRanges(),r.addRange(a),document.execCommand("copy")}}});new a["a"]({store:_,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6ef8":function(t,e,n){},8768:function(t,e,n){"use strict";n("6ef8")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.989137a4.js.map