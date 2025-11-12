// pxg
/*! ------------------------------------------------------

 Underscore.js 1.5.1
 http://underscorejs.org
 (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 Underscore may be freely distributed under the MIT license.

 ------------------------------------------------------- */
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-(1/0);var e={computed:-(1/0),value:-(1/0)};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null!=n?null==t||r?n[0]:o.call(n,0,t):void 0},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null!=n?null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0)):void 0},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return void 0===n},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null!=n){var r=n[t];return j.isFunction(r)?r.call(n):r}},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
!function(t){var r,e,n;e="data-auto-height",r="data-height-group",n="data-height-part",jQuery.fn.heighter=function(){function e(t){var r;return r=[],_.each(t,function(t){return _.each(t.querySelectorAll("["+n+"]"),function(t,e){var n,o;return o=t.style,o.height="auto",o.minHeight="0",n=t.offsetHeight,r[e]>n?void 0:r[e]=n})}),r}function o(r,e){return _.each(r,function(r){return _.each(r.querySelectorAll("["+n+"]"),function(r,n){var o,u,i,h,a,c,l;return o=e[n],u=r.style,"border-box"!==u.boxSizing&&(i=t(r),h=parseInt(i.css("padding-top")||0,10),a=parseInt(i.css("padding-bottom")||0,10),c=parseInt(i.css("border-top-width")||0,10),l=parseInt(i.css("border-bottom-width")||0,10),o-=h+a+c+l),u.height="",u.minHeight=o+"px"})})}function u(r){var e;return e=_.map(r,function(r){return t.Deferred(function(t){return function(t){return r.onLoad=function(){return this.onLoad=null,this.onError=null,t.resolve()},r.onError=function(){return this.onLoad=null,this.onError=null,t.resolve()}}}(this)).promise()}),t.when(e)}var i;return i=this.toArray(),0!==i.length?(_.each(i,function(t){var n,i=_.uniq(_.map(t.querySelectorAll("["+r+"]"),function(t){return t.getAttribute(r)}));_.each(i,function(i){var h="["+r+'="'+i+'"]',a=t.querySelectorAll(h+" img"),c=t.querySelectorAll(h);c.length<2||(0!==a.length?u(a).then(function(){n=e(c),o(c,n)}):(n=e(c),o(c,n)))})}),this):void 0},jQuery.heighter=function(){jQuery("["+e+"]").heighter()},jQuery(jQuery.heighter)}(jQuery);
/*! jQuery.tinyscroller (https://github.com/Takazudo/jQuery.tinyscroller)
 * lastupdate: 2013-03-29
 * version: 0.5.1
 * author: 'Takazudo' Takeshi Takatsudo <takazudo@gmail.com>
 * License: MIT */
(function(){var t=[].slice,e=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty,r=function(t,e){function r(){this.constructor=t}for(var s in e)n.call(e,s)&&(t[s]=e[s]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};(function(n,s,o){var i,l,c,a,h,u;return h={},l=n(s),i=n(o),u=Math.round,a=Math.min,c=Math.abs,h.yOf=function(t){var e;for(e=0;t.offsetParent;)e+=t.offsetTop,t=t.offsetParent;return e},h.isHash=function(t){return/^#.+$/.test(t)},h.getWhereTo=function(t){var e;return e=n(t),e.data("scrollto")||e.attr("href")},h.calcY=function(t){var e,r;if("number"===n.type(t))return t;if("string"===n.type(t)){if(!h.isHash(t))return!1;e=i.find(t)}else e=n(t);return e.size()?r=h.yOf(e[0]):null},h.scrollTop=function(){return i.scrollTop()||o.documentElement.scrollTop||o.body.scrollTop||s.pageYOffset||0},h.ua=function(){var t,e,r;return e={},r=navigator.userAgent,t=function(t){var s;return s=!1,n.each(t,function(t,n){var o;return o=RegExp(n,"i"),Boolean(r.match(o))?(e[n]=!0,s=!0):e[n]=!1,!0}),s},t(["iphone","ipod","ipad"]||t(["android"]))&&(e.mobile=!0),e}(),h.Event=function(){function e(){}return e.prototype.bind=function(t,e){var n,r,s,o,i;for(this._callbacks||(this._callbacks={}),n=t.split(" "),o=0,i=n.length;i>o;o++)r=n[o],(s=this._callbacks)[r]||(s[r]=[]),this._callbacks[r].push(e);return this},e.prototype.one=function(t,e){return this._callbacks||(this._callbacks={}),this.bind(t,function(){return this.unbind(t,arguments.callee),e.apply(this,arguments)})},e.prototype.trigger=function(){var e,n,r,s,o,i,l;if(e=arguments.length>=1?t.call(arguments,0):[],this._callbacks||(this._callbacks={}),r=e.shift(),s=null!=(l=this._callbacks)?l[r]:void 0){for(o=0,i=s.length;i>o&&(n=s[o],n.apply(this,e)!==!1);o++);return this}},e.prototype.unbind=function(t,e){var n,r,s,o,i,l;if(this._callbacks||(this._callbacks={}),!t)return this._callbacks={},this;if(s=null!=(l=this._callbacks)?l[t]:void 0,!s)return this;if(!e)return delete this._callbacks[t],this;for(r=o=0,i=s.length;i>o;r=++o)if(n=s[r],n===e){s=s.slice(),s.splice(r,1),this._callbacks[t]=s;break}return this},e}(),h.Scroller=function(t){function o(t){this._stepToNext=e(this._stepToNext,this),t&&this.option(t),this._handleMobile()}var p;return r(o,t),p=["scrollstart","scrollend","scrollcancel"],o.prototype.options={speed:30,maxStep:2e3,slowdownRate:3,changehash:!0,userskip:!0,selector:"a[href^=#]:not(.apply-noscroll)",adjustEndY:!1,dontAdjustEndYIfSelectorIs:null,dontAdjustEndYIfYis:null},o.prototype._handleMobile=function(){return h.ua.mobile?(this.options.userskip=!1,this):this},o.prototype._invokeScroll=function(){var t=this;return this.trigger("scrollstart",this._endY,this._reservedHash),this._scrollDefer.then(function(){return t.options.changehash&&t._reservedHash&&(location.hash=t._reservedHash),t.trigger("scrollend",t._endY,t._reservedHash)},function(){return t.trigger("scrollcancel",t._endY,t._reservedHash)}).always(function(){return t._reservedHash&&(t._reservedHash=null),t._scrollDefer=null}),this._stepToNext(),this},o.prototype._stepToNext=function(){var t,e,n,r,o,p,d,f,_,v,y,Y=this;return f=h.scrollTop(),r=this.options,r.userskip&&this._prevY&&f!==this._prevY?(s.scrollTo(0,this._endY),null!=(v=this._scrollDefer)&&v.resolve(),this._prevY=null,this):(this._endY>f?(t=i.height(),_=l.height(),p=u((t-f-_)/r.slowdownRate),d=u((this._endY-f)/r.slowdownRate),e=a(p,d),o=a(e,r.maxStep),2>o&&(o=2)):o=-a(c(u((this._endY-f)/r.slowdownRate)),r.maxStep),n=f+o,s.scrollTo(0,n),this._prevY=n,this._cancelNext?(this._cancelNext=!1,null!=(y=this._scrollDefer)&&y.reject(),this):(setTimeout(function(){var t;return 1>=c(f-Y._endY)||h.scrollTop()===f?(s.scrollTo(0,Y._endY),Y._prevY=null,null!=(t=Y._scrollDefer)&&t.resolve(),Y):Y._stepToNext()},r.speed),this))},o.prototype.scrollTo=function(t,e){var r,s;return s=!0,this.options.changehash&&(s=!1),this.options.adjustEndY===!1&&(s=!1),(null!=e?e.adjustEndY:void 0)===!1&&(s=!1),h.isHash(t)&&(this._reservedHash=t,this.options.dontAdjustEndYIfSelectorIs&&i.find(t).is(this.options.dontAdjustEndYIfSelectorIs)&&(s=!1)),r=h.calcY(t),r===!1?this:("number"===n.type(this.options.dontAdjustEndYIfYis)&&r===this.options.dontAdjustEndYIfYis&&(s=!1),null!=(null!=e?e.adjustEndY:void 0)?r+=e.adjustEndY:this.options.adjustEndY!==!1&&(r+=this.options.adjustEndY),this._endY=r,this._scrollDefer=n.Deferred(),this._invokeScroll(),this._scrollDefer)},o.prototype.stop=function(){var t=this;return n.Deferred(function(e){return t._scrollDefer?(t._cancelNext=!0,t._scrollDefer.fail(function(){return e.resolve()})):e.resolve()})},o.prototype.option=function(t){var e=this;return t?(this.options=n.extend({},this.options,t),this._handleMobile(),n.each(p,function(t,n){return e.options[n]&&e.bind(n,e.options[n]),!0}),this):this.options},o.prototype.live=function(t){var e;return t=t||this.options.selector,e=this,i.delegate(t,"click",function(t){return t.preventDefault(),e.scrollTo(h.getWhereTo(this))}),this},o}(h.Event),n.fn.tinyscrollable=function(t){var e;return e=new h.Scroller(t),this.each(function(){var t;return t=n(this),t.data("tinyscroller",e),t.data("tinyscrollerattached")?this:(t.bind("click",function(t){return t.preventDefault(),e.scrollTo(h.getWhereTo(this))}),t.data("tinyscrollerattached",!0))})},n.TinyscrollerNs=h,n.Tinyscroller=h.Scroller})(jQuery,window,document)}).call(this);
(function(){var b,d,c;b=jQuery;c=(function(){function b(){this.fadeDuration=500;this.fitImagesInViewport=true;this.resizeDuration=700;this.showImageNumberLabel=true;this.wrapAround=false}b.prototype.albumLabel=function(b,c){return"Image "+b+" of "+c};return b})();d=(function(){function c(b){this.options=b;this.album=[];this.currentImageIndex=void 0;this.init()}c.prototype.init=function(){this.enable();return this.build()};c.prototype.enable=function(){var c=this;return b('body').on('click','a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',function(d){c.start(b(d.currentTarget));return false})};c.prototype.build=function(){var c=this;b("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(b('body'));this.$lightbox=b('#lightbox');this.$overlay=b('#lightboxOverlay');this.$outerContainer=this.$lightbox.find('.lb-outerContainer');this.$container=this.$lightbox.find('.lb-container');this.containerTopPadding=parseInt(this.$container.css('padding-top'),10);this.containerRightPadding=parseInt(this.$container.css('padding-right'),10);this.containerBottomPadding=parseInt(this.$container.css('padding-bottom'),10);this.containerLeftPadding=parseInt(this.$container.css('padding-left'),10);this.$overlay.hide().on('click',function(){c.end();return false});this.$lightbox.hide().on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$outerContainer.on('click',function(d){if(b(d.target).attr('id')==='lightbox'){c.end()}return false});this.$lightbox.find('.lb-prev').on('click',function(){if(c.currentImageIndex===0){c.changeImage(c.album.length-1)}else{c.changeImage(c.currentImageIndex-1)}return false});this.$lightbox.find('.lb-next').on('click',function(){if(c.currentImageIndex===c.album.length-1){c.changeImage(0)}else{c.changeImage(c.currentImageIndex+1)}return false});return this.$lightbox.find('.lb-loader, .lb-close').on('click',function(){c.end();return false})};c.prototype.start=function(c){var f,e,j,d,g,n,o,k,l,m,p,h,i;b(window).on("resize",this.sizeOverlay);b('select, object, embed').css({visibility:"hidden"});this.$overlay.width(b(document).width()).height(b(document).height()).fadeIn(this.options.fadeDuration);this.album=[];g=0;j=c.attr('data-lightbox');if(j){h=b(c.prop("tagName")+'[data-lightbox="'+j+'"]');for(d=k=0,m=h.length;k<m;d=++k){e=h[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}else{if(c.attr('rel')==='lightbox'){this.album.push({link:c.attr('href'),title:c.attr('title')})}else{i=b(c.prop("tagName")+'[rel="'+c.attr('rel')+'"]');for(d=l=0,p=i.length;l<p;d=++l){e=i[d];this.album.push({link:b(e).attr('href'),title:b(e).attr('title')});if(b(e).attr('href')===c.attr('href')){g=d}}}}f=b(window);o=f.scrollTop()+f.height()/10;n=f.scrollLeft();this.$lightbox.css({top:o+'px',left:n+'px'}).fadeIn(this.options.fadeDuration);this.changeImage(g)};c.prototype.changeImage=function(f){var d,c,e=this;this.disableKeyboardNav();d=this.$lightbox.find('.lb-image');this.sizeOverlay();this.$overlay.fadeIn(this.options.fadeDuration);b('.lb-loader').fadeIn('slow');this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();this.$outerContainer.addClass('animating');c=new Image();c.onload=function(){var m,g,h,i,j,k,l;d.attr('src',e.album[f].link);m=b(c);d.width(c.width);d.height(c.height);if(e.options.fitImagesInViewport){l=b(window).width();k=b(window).height();j=l-e.containerLeftPadding-e.containerRightPadding-20;i=k-e.containerTopPadding-e.containerBottomPadding-110;if((c.width>j)||(c.height>i)){if((c.width/j)>(c.height/i)){h=j;g=parseInt(c.height/(c.width/h),10);d.width(h);d.height(g)}else{g=i;h=parseInt(c.width/(c.height/g),10);d.width(h);d.height(g)}}}return e.sizeContainer(d.width(),d.height())};c.src=this.album[f].link;this.currentImageIndex=f};c.prototype.sizeOverlay=function(){return b('#lightboxOverlay').width(b(document).width()).height(b(document).height())};c.prototype.sizeContainer=function(f,g){var b,d,e,h,c=this;h=this.$outerContainer.outerWidth();e=this.$outerContainer.outerHeight();d=f+this.containerLeftPadding+this.containerRightPadding;b=g+this.containerTopPadding+this.containerBottomPadding;this.$outerContainer.animate({width:d,height:b},this.options.resizeDuration,'swing');setTimeout(function(){c.$lightbox.find('.lb-dataContainer').width(d);c.$lightbox.find('.lb-prevLink').height(b);c.$lightbox.find('.lb-nextLink').height(b);c.showImage()},this.options.resizeDuration)};c.prototype.showImage=function(){this.$lightbox.find('.lb-loader').hide();this.$lightbox.find('.lb-image').fadeIn('slow');this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};c.prototype.updateNav=function(){this.$lightbox.find('.lb-nav').show();if(this.album.length>1){if(this.options.wrapAround){this.$lightbox.find('.lb-prev, .lb-next').show()}else{if(this.currentImageIndex>0){this.$lightbox.find('.lb-prev').show()}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find('.lb-next').show()}}}};c.prototype.updateDetails=function(){var b=this;if(typeof this.album[this.currentImageIndex].title!=='undefined'&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast')}if(this.album.length>1&&this.options.showImageNumberLabel){this.$lightbox.find('.lb-number').text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn('fast')}else{this.$lightbox.find('.lb-number').hide()}this.$outerContainer.removeClass('animating');this.$lightbox.find('.lb-dataContainer').fadeIn(this.resizeDuration,function(){return b.sizeOverlay()})};c.prototype.preloadNeighboringImages=function(){var c,b;if(this.album.length>this.currentImageIndex+1){c=new Image();c.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){b=new Image();b.src=this.album[this.currentImageIndex-1].link}};c.prototype.enableKeyboardNav=function(){b(document).on('keyup.keyboard',b.proxy(this.keyboardAction,this))};c.prototype.disableKeyboardNav=function(){b(document).off('.keyboard')};c.prototype.keyboardAction=function(g){var d,e,f,c,b;d=27;e=37;f=39;b=g.keyCode;c=String.fromCharCode(b).toLowerCase();if(b===d||c.match(/x|o|c/)){this.end()}else if(c==='p'||b===e){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}}else if(c==='n'||b===f){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}}};c.prototype.end=function(){this.disableKeyboardNav();b(window).off("resize",this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);return b('select, object, embed').css({visibility:"visible"})};return c})();b(function(){var e,b;b=new c();return e=new d(b)})}).call(this);
//= require lib/license.pc2
//= require lib/underscore.min.js
//= require lib/jquery.heighter.min
//= require lib/jquery.tinyscroller
//= require lib/lightbox-2.6.min.js
jQuery(function () {
  $('.area_all').eq(0).attr('id', 'js_top');

  $(
    [
      'a[href$=jpg]',
      'a[href$=JPG]',
      'a[href$=jpeg]',
      'a[href$=JPEG]',
      'a[href$=png]',
      'a[href$=PNG]',
      'a[href$=gif]',
      'a[href$=GIF]',
    ].join(','),
  )
    .filter(function () {
      var href = location.href;
      var e = this.href;
      var ret = false;
      // プレビュー
      if (/cms_v2/.test(href)) {
        ret = /\/cms_v2\/_master\/acre\/photo/.test(e)
          ? !0
          : /\/cms_v2\/_cms_store\/acre\/upload/.test(e)
          ? !0
          : !1;
        // 公開サイト
      } else {
        ret = /\/_master\/acre\/photo/.test(e)
          ? !0
          : /\/_p\/acre\/\d+\/images\/pc\/large_thumb/.test(e)
          ? !0
          : !1;
      }
      return ret;
    })
    .attr('data-lightbox', 'cms');
});

// UI-Slider PC
(function ($) {
  // 秒
  var Duration = {
    s: 5,
    m: 7,
    l: 10,
  };
  var Speed = {
    s: 0.5,
    m: 1,
    l: 2,
  };
  var SliderAutoPlay = 'data-slider-auto-play';
  var SliderHoverStop = 'data-slider-hover-stop';
  var SliderDuration = 'data-slider-duration';
  var SliderUserDuration = 'data-slider-user-duration';
  var SliderAnimationSpeed = 'data-slider-animation-speed';
  var SliderUserAnimationSpeed = 'data-slider-user-animation-speed';

  $(function () {
    $('.ui-slider').uiSlider();
  });
  $.fn.uiSlider = function (options) {
    var settings = $.extend({}, options);
    // スライダーごと
    return this.each(function () {
      var $slider = $(this);
      // 各部品の設定取得
      var autoPlay = ($slider.attr(SliderAutoPlay) || '').toLowerCase() === 'true';
      var hoverStop = ($slider.attr(SliderHoverStop) || '').toLowerCase() === 'true';
      var sliderDuration = ($slider.attr(SliderDuration) || '').toLowerCase();
      var sliderUserDuration = ($slider.attr(SliderUserDuration) || '').toLowerCase();
      sliderDuration = !isNaN(parseFloat(sliderUserDuration))
        ? parseFloat(sliderUserDuration)
        : parseFloat(Duration[sliderDuration] || 1);
      sliderDuration *= 1000; // ミリ秒
      var animationSpeed = ($slider.attr(SliderAnimationSpeed) || '').toLowerCase();
      var animationUserSpeed = ($slider.attr(SliderUserAnimationSpeed) || '').toLowerCase();
      animationSpeed = !isNaN(parseFloat(animationUserSpeed))
        ? parseFloat(animationUserSpeed)
        : parseFloat(Speed[animationSpeed] || 1);
      animationSpeed *= 1000; // ミリ秒

      var $sliderContainer = $slider.find('.ui-slider-container');
      var $sliderController = $slider.find('.ui-slider-controller');

      // hover状態取得
      var isHover = false;
      $sliderContainer
        .find('.ui-slider-prev,.ui-slider-next,.ui-slider-fades,.ui-slider-sliders')
        .hover(
          function () {
            isHover = true;
          },
          function () {
            isHover = false;
          },
        );

      // Carousel
      (function () {
        var current = 0;

        // レイアウトシフト対策-1
        // https://github.com/wmssystem/nc-front/issues/3441#issuecomment-3248761234
        // .ui-slider-fadesは、アニメ設定にフェードを指定した場合に付与され、レイアウトシフトはフェード指定の場合のみに発生する。
        // そして、レイアウトシフトの防止は、CSSのabsolute指定を除去することで対応できるため、バックエンド側でそのような指定にしている。
        var $carouselItems = $sliderContainer.find('.ui-slider-fades .ui-slider-item');
        var $dots = $slider.find('.ui-slider-controller .ui-slider-dot');

        $sliderContainer.find('.ui-slider-prev,.ui-slider-next').show();
        $sliderController.show();

        // 画像ロード
        var imageLoadPromises = $carouselItems.get().map(function (obj) {
          var deferred = $.Deferred();
          var $img = $(obj).find('img:first-child');
          var src = $img.attr('src');
          var img = new Image();
          img.onload = function () {
            var aspect = img.height / img.width;
            deferred.resolve(aspect);
          };
          img.src = src;
          return deferred.promise();
        });
        $dots.eq(0).addClass('active');

        // 画像ロード完了後実行
        $.when.apply(null, imageLoadPromises).then(function () {
          // レイアウトシフト対策-2
          // https://github.com/wmssystem/nc-front/issues/3441#issuecomment-3248761234
          // バックエンド側でabsolute指定を除去したため、画像ロード後にフロントでabsoluteを指定する
          $carouselItems.css('position', 'absolute');

          // 最大高さアスペクト比取得
          var maxAspect = Math.max.apply(null, arguments);
          // リサイズ処理
          $(window).resize(function () {
            // NOTE: resize内でfindを実行し、リサイズ後のサイズを取得
            var $carousels = $sliderContainer.find('.ui-slider-fades');
            var maxHeight = Math.ceil($carousels.width() * maxAspect);
            $carousels.height(maxHeight);
          });
          $(window).resize();

          // スライド処理
          var isSlide = false;
          var maxLength = $carouselItems.length - 1;
          var slideImage = function (target) {
            if (target < 0) {
              target = maxLength;
            } else if (maxLength < target) {
              target = 0;
            }

            if (isSlide || current === target) {
              return;
            }
            isSlide = true;
            current = target;

            // 現在地表示ドットの処理
            $dots.removeClass('active');
            $dots.eq(current).addClass('active');

            // カルーセルフェード処理
            // 現在表示中以外の画像をフェードアウトし、次の画像を同時にフェードインすることで真のクロスフェードを実現
            $carouselItems.not($carouselItems.eq(current)).fadeOut(animationSpeed);
            $carouselItems.eq(current).fadeIn(animationSpeed, function () {
              isSlide = false;
            });
          };

          // コントローラー
          $sliderContainer.find('.ui-slider-prev').on('click', function () {
            slideImage(current - 1);
          });
          $sliderContainer.find('.ui-slider-next').on('click', function () {
            slideImage(current + 1);
          });
          $dots.on('click', function (e) {
            var index = $dots.index(e.target);
            slideImage(index);
          });

          // 自動再生
          if (autoPlay && $carouselItems[0]) {
            setInterval(function () {
              if ((hoverStop && isHover) || isSlide) {
                return;
              }
              slideImage(current + 1);
            }, sliderDuration);
          }
        });
      })();
      // Slider
      (function () {
        var current = 0;

        var $sliders = $sliderContainer.find('.ui-slider-sliders');
        var $sliderItems = $sliderContainer.find('.ui-slider-sliders .ui-slider-item');

        var $dots = $slider.find('.ui-slider-controller .ui-slider-dot');

        $sliderController.show();
        $sliderContainer.find('.ui-slider-prev,.ui-slider-next').show();

        // 画像ロード
        var imageLoadPromises = $sliderItems.get().map(function (obj) {
          var deferred = $.Deferred();
          var $img = $(obj).find('img:first-child');
          var src = $img.attr('src');
          var img = new Image();
          img.onload = function () {
            var aspect = img.height / img.width;
            deferred.resolve(aspect);
          };
          img.src = src;
          return deferred.promise();
        });
        $dots.eq(0).addClass('active');

        // 画像ロード完了後実行
        $.when.apply(null, imageLoadPromises).then(function () {
          // 最大高さアスペクト比取得
          var maxAspect = Math.max.apply(null, arguments);
          var baseSize = {
            width: $sliders.width(),
            height: $sliders.width() * maxAspect,
          };
          {
            // リサイズ処理
            $(window).resize(function () {
              baseSize.width = $sliderContainer.width();
              baseSize.height = $sliderContainer.width() * maxAspect;
              $sliders.css(baseSize);

              // NOTE: resize内でfindを実行し、リサイズ後のサイズを取得
              var $slideItems = $sliderContainer.find('.ui-slider-sliders .ui-slider-item');
              $slideItems.css(
                $.extend(
                  {
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  },
                  baseSize,
                ),
              );
              for (var i = 0; i < $slideItems.length; i++) {
                $slideItems.eq(i).css({
                  left: i * baseSize.width,
                });
              }
            });
            $(window).resize();
          }

          // スライド処理
          var isSlide = false;
          var slideImage = function (target) {
            if (isSlide || current === target) {
              return;
            }
            isSlide = true;

            var $sliders = $sliderContainer.find('.ui-slider-sliders');
            var $slideItem = $sliderContainer.find('.ui-slider-sliders .ui-slider-item');

            var overMax = $slideItem.length - 1 < target;
            var underMin = target < 0;

            var isNext = current < target;
            var offsetIndex = Math.abs(current - target);
            var offset = (isNext ? '-=' : '+=') + offsetIndex * baseSize.width;

            if (overMax) {
              var $temp1 = $slideItem.first().detach();
              $temp1.css({ left: baseSize.width });
              $temp1.appendTo($sliders);
              target = 0;
            } else if (underMin) {
              var $temp2 = $slideItem.last().detach();
              $temp2.prependTo($sliders);
              $temp2.css({ left: 0 - baseSize.width });
              target = $slideItem.length - 1;
            }
            current = target;

            // 現在地表示ドットの処理
            $dots.removeClass('active');
            $dots.eq(current).addClass('active');

            // スライドフェード処理
            $slideItem
              .animate({ left: offset }, animationSpeed)
              .promise()
              .done(function () {
                var $sliders = $sliderContainer.find('.ui-slider-sliders');
                var $slideItem = $sliderContainer.find('.ui-slider-sliders .ui-slider-item');
                if (overMax) {
                  var $temp1 = $slideItem.slice(0, $slideItem.length - 1).detach();
                  $.each($temp1, function (i, el) {
                    $(el).css({ left: (i + 1) * baseSize.width });
                  });
                  $temp1.appendTo($sliders);
                } else if (underMin) {
                  var $temp2 = $slideItem.slice(1, $slideItem.length).detach();
                  $.each($temp2, function (i, value) {
                    $(value).css({ left: 0 - ($temp2.length - i) * baseSize.width });
                  });
                  $temp2.prependTo($sliders);
                }
                isSlide = false;
              });
          };

          // コントローラー
          $sliderContainer.find('.ui-slider-prev').on('click', function () {
            slideImage(current - 1);
          });
          $sliderContainer.find('.ui-slider-next').on('click', function () {
            slideImage(current + 1);
          });
          $dots.on('click', function (e) {
            var index = $dots.index(e.target);
            slideImage(index);
          });

          // 自動再生
          if (autoPlay && $sliderItems[0]) {
            setInterval(function () {
              if ((hoverStop && isHover) || isSlide) {
                return;
              }
              slideImage(current + 1);
            }, sliderDuration);
          }
        });
      })();
    });
  };
})(jQuery);

(function ($) {
  // スクロールエフェクト
  // var targetClasses = [
  //   ".scrollEffect-fadeInUp",
  //   ".scrollEffect-fadeInSlowUp",
  //   ".scrollEffect-fadeInLeft",
  //   ".scrollEffect-fadeInRight",
  //   ".scrollEffectParent-fadeInUp",
  //   ".scrollEffectParent-fadeInSlowUp",
  //   ".scrollEffectParent-fadeInLeft",
  //   ".scrollEffectParent-fadeInRight"
  // ];
  // スクロールエフェクト用のクラスで選択するのではなく、
  // JS向けに、テンプレート定義では以下クラスを付与するルールとするため、
  // これらのクラスをセレクタの対象とする
  // https://github.com/wmssystem/nc-front/issues/2889#issuecomment-1551035255
  var targetClasses = ['.scrollEffect', '.scrollEffectParent'];
  var targets = $(targetClasses.join(','));
  var options = {
    root: null,
    rootMargin: '-100px 0px',
    threshold: 0,
  };

  var observer = new IntersectionObserver(onIntersect, options);
  targets.each(function (index, elem) {
    observer.observe(elem);
  });

  function onIntersect(entries) {
    $.each(entries, function (index, entry) {
      if (entry.isIntersecting) {
        $(entry.target).addClass('--show');
      }
    });
  }
})(jQuery);
