webpackHotUpdate(0,[function(o,n,e){(function(o){"use strict";function n(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function t(o){return"Hello "+o}function l(o,n){o(4,3),n(3)}var c=function(){function o(o,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}}();e(191),e(192).polyfill(),e(193);var i="toto";console.log(i),console.log(t("Toto")),console.log("Resultat division par 0 : "+12/0);var s="obj1",a="obj2",r=[s,a];console.log(r);var u=[{ville:"chauriat",nom:"yannis"},{ville:"totoville",nom:"Toto"}];console.log(u),console.log(u[1].ville);var f=new Promise(function(o,n){o("Success!")});f.then(function(o){console.log(o)})["catch"](function(o){console.log(o)});var g=function(){function o(e,t){n(this,o),this.nom=e,this.age=t}return c(o,[{key:"info",value:function(){console.log("Je suis "+this.nom)}}]),o}(),i=new g("toto",10);console.log(i),console.log(i.info()),l(function(o,n){console.log(o,n)},function(o){console.log(o)});var v=new Request("http://jsonview.com/example.json",{headers:new Headers({Accept:"application/json"})});o(v,{mode:"no-cors",method:"GET"}).then(function(o){return o.json()}).then(function(o){console.log(o)})["catch"](function(o){console.log(o)})}).call(n,e(198))}]);