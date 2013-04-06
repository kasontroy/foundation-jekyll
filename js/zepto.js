/*! zfjk - v0.9.0 - 2013-04-05
* Copyright (c) 2013 ; Licensed  */
(function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(this===void 0||null===this)throw new TypeError;var n,i=Object(this),s=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==s&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=s)throw new TypeError}for(;s>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})})();var Zepto=function(){function t(t){return null==t?t+"":V[Y.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function s(e){return"object"==t(e)}function o(t){return s(t)&&!n(t)&&t.__proto__==Object.prototype}function r(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function l(t){return $.call(t,function(t){return null!=t})}function c(t){return t.length>0?k.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function d(t){return t in F?F[t]:F[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||H[u(t)]?e:e+"px"}function f(t){var e,n;return D[t]||(e=A.createElement(t),A.body.appendChild(e),n=L(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function p(t){return"children"in t?N.call(t.children):k.map(t.childNodes,function(t){return 1==t.nodeType?t:w})}function g(t,e,n){for(C in e)n&&(o(e[C])||r(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),r(e[C])&&!r(t[C])&&(t[C]=[]),g(t[C],e[C],n)):e[C]!==w&&(t[C]=e[C])}function m(t,e){return e===w?k(t):k(t).filter(e)}function v(t,n,i,s){return e(n)?n.call(t,i,s):n}function b(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:(i?n.baseVal=e:t.className=e,w)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?k.parseJSON(t):t:e):t}catch(n){return t}}function _(t,e){e(t);for(var n in t.childNodes)_(t.childNodes[n],e)}var w,C,k,T,j,E,S=[],N=S.slice,$=S.filter,A=window.document,D={},F={},L=A.defaultView.getComputedStyle,H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,P=/^(?:body|html)$/i,z=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],W=A.createElement("table"),R=A.createElement("tr"),I={tr:A.createElement("tbody"),tbody:W,thead:W,tfoot:W,td:R,th:R,"*":A.createElement("div")},B=/complete|loaded|interactive/,Z=/^\.([\w-]+)$/,X=/^#([\w-]*)$/,U=/^[\w-]+$/,V={},Y=V.toString,J={},Q=A.createElement("div");return J.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,s=t.parentNode,o=!s;return o&&(s=Q).appendChild(t),i=~J.qsa(s,e).indexOf(t),o&&Q.removeChild(t),i},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(t){return $.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){t.replace&&(t=t.replace(O,"<$1></$2>")),e===w&&(e=M.test(t)&&RegExp.$1),e in I||(e="*");var i,s,r=I[e];return r.innerHTML=""+t,s=k.each(N.call(r.childNodes),function(){r.removeChild(this)}),o(n)&&(i=k(s),k.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),s},J.Z=function(t,e){return t=t||[],t.__proto__=k.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){if(t){if(e(t))return k(A).ready(t);if(J.isZ(t))return t;var i;if(r(t))i=l(t);else if(s(t))i=[o(t)?k.extend({},t):t],t=null;else if(M.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return k(n).find(t);i=J.qsa(A,t)}return J.Z(i,t)}return J.Z()},k=function(t,e){return J.init(t,e)},k.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},J.qsa=function(t,e){var n;return i(t)&&X.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(Z.test(e)?t.getElementsByClassName(RegExp.$1):U.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},k.contains=function(t,e){return t!==e&&t.contains(e)},k.type=t,k.isFunction=e,k.isWindow=n,k.isArray=r,k.isPlainObject=o,k.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},k.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},k.camelCase=j,k.trim=function(t){return t.trim()},k.uuid=0,k.support={},k.expr={},k.map=function(t,e){var n,i,s,o=[];if(a(t))for(i=0;t.length>i;i++)n=e(t[i],i),null!=n&&o.push(n);else for(s in t)n=e(t[s],s),null!=n&&o.push(n);return c(o)},k.each=function(t,e){var n,i;if(a(t)){for(n=0;t.length>n;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},k.grep=function(t,e){return $.call(t,e)},window.JSON&&(k.parseJSON=JSON.parse),k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),k.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return k(k.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return k(N.apply(this,arguments))},ready:function(t){return B.test(A.readyState)?t(k):A.addEventListener("DOMContentLoaded",function(){t(k)},!1),this},get:function(t){return t===w?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):k($.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return k(E(this.concat(k(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):k(t);this.forEach(function(t){0>i.indexOf(t)&&n.push(t)})}return k(n)},has:function(t){return this.filter(function(){return s(t)?k.contains(this,t):k(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!s(t)?t:k(t)},last:function(){var t=this[this.length-1];return t&&!s(t)?t:k(t)},find:function(t){var e,n=this;return e="object"==typeof t?k(t).filter(function(){var t=this;return S.some.call(n,function(e){return k.contains(e,t)})}):1==this.length?k(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)})},closest:function(t,e){var n=this[0],s=!1;for("object"==typeof t&&(s=k(t));n&&!(s?s.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return k(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=k.map(n,function(t){return(t=t.parentNode)&&!i(t)&&0>e.indexOf(t)?(e.push(t),t):w});return m(e,t)},parent:function(t){return m(E(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return $.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return k.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==L(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=k(t).get(0),s=i.parentNode||this.length>1;return this.each(function(e){k(this).wrapAll(n?t.call(this,e):s?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){k(this[0]).before(t=k(t));for(var e;(e=t.children()).length;)t=e.first();k(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=k(this),s=i.contents(),o=n?t.call(this,e):t;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){k(this).replaceWith(k(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=k(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return k(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return k(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;k(this).empty().append(v(this,t,e,n))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(s(t))for(C in t)b(this,C,t[C]);else b(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&b(this,t)})},prop:function(t,e){return e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+u(t),e);return null!==n?x(n):w},val:function(t){return t===w?this[0]&&(this[0].multiple?k(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=k(this),i=v(this,t,e,n.offset()),s=n.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(2>arguments.length&&"string"==typeof e)return this[0]&&(this[0].style[j(e)]||L(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=u(e)+":"+h(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(C in e)e[C]||0===e[C]?i+=u(C)+":"+h(C,e[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(k(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return S.some.call(this,function(t){return this.test(y(t))},d(t))},addClass:function(t){return this.each(function(e){T=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){k(this).hasClass(t)||T.push(t)},this),T.length&&y(this,n+(n?" ":"")+T.join(" "))})},removeClass:function(t){return this.each(function(e){return t===w?y(this,""):(T=y(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(d(t)," ")}),y(this,T.trim()),w)})},toggleClass:function(t,e){return this.each(function(n){var i=k(this),s=v(this,t,n,y(this));s.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:w},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=P.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(k(t).css("margin-top"))||0,n.left-=parseFloat(k(t).css("margin-left"))||0,i.top+=parseFloat(k(e[0]).css("border-top-width"))||0,i.left+=parseFloat(k(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!P.test(t.nodeName)&&"static"==k(t).css("position");)t=t.offsetParent;return t})}},k.fn.detach=k.fn.remove,["width","height"].forEach(function(t){k.fn[t]=function(e){var s,o=this[0],r=t.replace(/./,function(t){return t[0].toUpperCase()});return e===w?n(o)?o["inner"+r]:i(o)?o.documentElement["offset"+r]:(s=this.offset())&&s[t]:this.each(function(n){o=k(this),o.css(t,v(this,e,n,o[t]()))})}}),q.forEach(function(e,n){var i=n%2;k.fn[e]=function(){var e,s,o=k.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),r=this.length>1;return 1>o.length?this:this.each(function(t,e){s=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(r)t=t.cloneNode(!0);else if(!s)return k(t).remove();_(s.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},k.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return k(t)[e](this),this}}),J.Z.prototype=k.fn,J.uniq=E,J.deserializeValue=x,k.zepto=J,k}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),s=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),r=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=a&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),u=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),h=t.match(/(BB10).*Version\/([\d.]+)/),f=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),s&&(e.android=!0,e.version=s[2]),r&&(e.ios=e.iphone=!0,e.version=r[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),l&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),h&&(e.bb10=!0,e.version=h[2]),f&&(e.rimtabletos=!0,e.version=f[2]),p&&(n.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),u&&(n.silk=!0,n.version=u[1]),!u&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),m&&(n.firefox=!0,n.version=m[1]),e.tablet=!!(o||p||s&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(s||r||a||d||h||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=f++)}function n(t,n,o,r){if(n=i(n),n.ns)var a=s(n.ns);return(h[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||r&&t.sel!=r)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function s(t){return RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function r(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return g[t]||t}function l(n,s,l,c,u,d){var f=e(n),p=h[f]||(h[f]=[]);o(s,l,function(e,s){var o=i(e);o.fn=s,o.sel=c,o.e in g&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=u&&u(s,e);var l=o.del||s;o.proxy=function(t){var e=l.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=p.length,p.push(o),n.addEventListener(a(o.e),o.proxy,r(o,d))})}function c(t,i,s,l,c){var u=e(t);o(i||"",s,function(e,i){n(t,e,i,l).forEach(function(e){delete h[u][e.i],t.removeEventListener(a(e.e),e.proxy,r(e,c))})})}function u(e){var n,i={originalEvent:e};for(n in e)b.test(n)||void 0===e[n]||(i[n]=e[n]);return t.each(y,function(t,n){i[t]=function(){return this[n]=m,e[t].apply(e,arguments)},i[n]=v}),i}function d(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var h=(t.zepto.qsa,{}),f=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:l,remove:c},t.proxy=function(n,i){if(t.isFunction(n)){var s=function(){return n.apply(i,arguments)};return s._zid=e(n),s}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){l(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return c(i,e,t),n}})})};var m=function(){return!0},v=function(){return!1},b=/^([A-Z]|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(s,o){l(o,n,i,e,function(n){return function(i){var s,r=t(i.target).closest(e,o).get(0);return r?(s=t.extend(u(i),{currentTarget:r,liveFired:o}),n.apply(r,[s].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){c(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),d(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var s,o;return this.each(function(r,a){s=u("string"==typeof e?t.Event(e):e),s.data=i,s.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(s),s.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var s in e)"bubbles"==s?i=!!e[s]:n[s]=e[s];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var s=t.Event(n);return t(e).trigger(s,i),!s.defaultPrevented}function n(t,n,i,s){return t.global?e(n||b,i,s):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function s(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function r(t,e,i){var s=i.context,o="success";i.success.call(s,t,o,e),n(i,s,"ajaxSuccess",[e,i,t]),l(o,e,i)}function a(t,e,i,s){var o=s.context;s.error.call(o,i,e,t),n(s,o,"ajaxError",[i,s,t]),l(e,i,s)}function l(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),s(i)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":x.test(t)?"script":_.test(t)&&"xml")||"text"}function d(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=d(e.url,e.data))}function f(e,n,i,s){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(i)?i:void 0:n,dataType:o?s||i:i}}function p(e,n,i,s){var o,r=t.isArray(n);t.each(n,function(n,a){o=t.type(a),s&&(n=i?s:s+"["+(r?"":n)+"]"),!s&&r?e.add(a.name,a.value):"array"==o||!i&&"object"==o?p(e,a,i,n):e.add(n,a)})}var g,m,v=0,b=window.document,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,_=/^(?:text|application)\/xml/i,w="application/json",C="text/html",k=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,i="jsonp"+ ++v,s=b.createElement("script"),l=function(){clearTimeout(n),t(s).remove(),delete window[i]},u=function(t){l(),t&&"timeout"!=t||(window[i]=c),a(null,t||"abort",d,e)},d={abort:u};return o(d,e)===!1?(u("abort"),!1):(window[i]=function(t){l(),r(t,d,e)},s.onerror=function(){u("error")},s.src=e.url.replace(/=\?/,"="+i),t("head").append(s),e.timeout>0&&(n=setTimeout(function(){u("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=""+window.location),h(n),n.cache===!1&&(n.url=d(n.url,"_="+Date.now()));var s=n.dataType,l=/=\?/.test(n.url);if("jsonp"==s||l)return l||(n.url=d(n.url,"callback=?")),t.ajaxJSONP(n);var f,p=n.accepts[s],v={},b=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,y=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),y.overrideMimeType&&y.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),y.onreadystatechange=function(){if(4==y.readyState){y.onreadystatechange=c,clearTimeout(f);var e,i=!1;if(y.status>=200&&300>y.status||304==y.status||0==y.status&&"file:"==b){s=s||u(y.getResponseHeader("content-type")),e=y.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=y.responseXML:"json"==s&&(e=k.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?a(i,"parsererror",y,n):r(e,y,n)}else a(null,y.status?"error":"abort",y,n)}};var x="async"in n?n.async:!0;y.open(n.type,n.url,x);for(m in n.headers)y.setRequestHeader(m,n.headers[m]);return o(y,n)===!1?(y.abort(),!1):(n.timeout>0&&(f=setTimeout(function(){y.onreadystatechange=c,y.abort(),a(null,"timeout",y,n)},n.timeout)),y.send(n.data?n.data:null),y)},t.get=function(){return t.ajax(f.apply(null,arguments))},t.post=function(){var e=f.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=f.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,o=this,r=e.split(/\s/),a=f(e,n,i),l=a.success;return r.length>1&&(a.url=r[0],s=r[1]),a.success=function(e){o.html(s?t("<div>").html(e.replace(y,"")).find(s):e),l&&l.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function s(t){return o?o+t:i(t)}var o,r,a,l,c,u,d,h,f="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,b={};t.each(p,function(t,n){return m.style[t+"TransitionProperty"]!==e?(f="-"+i(t)+"-",o=n,!1):e}),r=f+"transform",b[a=f+"transition-property"]=b[l=f+"transition-duration"]=b[c=f+"transition-timing-function"]=b[u=f+"animation-name"]=b[d=f+"animation-duration"]=b[h=f+"animation-timing-function"]="",t.fx={off:o===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:f,transitionEnd:s("TransitionEnd"),animationEnd:s("AnimationEnd")},t.fn.animate=function(e,n,i,s){return t.isPlainObject(n)&&(i=n.easing,s=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,s)},t.fn.anim=function(i,s,o,f){var p,g,m,y={},x="",_=this,w=t.fx.transitionEnd;if(s===e&&(s=.4),t.fx.off&&(s=0),"string"==typeof i)y[u]=i,y[d]=s+"s",y[h]=o||"linear",w=t.fx.animationEnd;else{g=[];for(p in i)v.test(p)?x+=p+"("+i[p]+") ":(y[p]=i[p],g.push(n(p)));x&&(y[r]=x,g.push(r)),s>0&&"object"==typeof i&&(y[a]=g.join(", "),y[l]=s+"s",y[c]=o||"linear")}return m=function(n){if(n!==e){if(n.target!==n.currentTarget)return;t(n.target).unbind(w,m)}t(this).css(b),f&&f.call(this)},s>0&&this.bind(w,m),this.size()&&this.get(0).clientLeft,this.css(y),0>=s&&setTimeout(function(){_.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var s=Math.abs(t-e),o=Math.abs(n-i);return s>=o?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){c=null,u.last&&(u.el.trigger("longTap"),u={})}function s(){c&&clearTimeout(c),c=null}function o(){r&&clearTimeout(r),a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),r=a=l=c=null,u={}}var r,a,l,c,u={},d=750;t(document).ready(function(){var h,f;t(document.body).bind("touchstart",function(n){h=Date.now(),f=h-(u.last||h),u.el=t(e(n.touches[0].target)),r&&clearTimeout(r),u.x1=n.touches[0].pageX,u.y1=n.touches[0].pageY,f>0&&250>=f&&(u.isDoubleTap=!0),u.last=h,c=setTimeout(i,d)}).bind("touchmove",function(t){s(),u.x2=t.touches[0].pageX,u.y2=t.touches[0].pageY,Math.abs(u.x1-u.x2)>10&&t.preventDefault()}).bind("touchend",function(){s(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?l=setTimeout(function(){u.el.trigger("swipe"),u.el.trigger("swipe"+n(u.x1,u.x2,u.y1,u.y2)),u={}},0):"last"in u&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,u.el.trigger(e),u.isDoubleTap?(u.el.trigger("doubleTap"),u={}):r=setTimeout(function(){r=null,u.el.trigger("singleTap"),u={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto);