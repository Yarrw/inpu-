(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57dc6dd6"],{"2dbe":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),u="["+a+"]",i=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),l=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var u,i;return a&&"function"==typeof(u=e.constructor)&&u!==n&&r(i=u.prototype)&&i!==n.prototype&&a(t,i),t}},"99c0":function(t,e,n){"use strict";n("2dbe")},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),u=n("94ca"),i=n("6eeb"),c=n("5135"),l=n("c6b6"),o=n("7156"),s=n("c04e"),f=n("d039"),p=n("7c73"),d=n("241c").f,h=n("06cf").f,x=n("9bf2").f,b=n("58a8").trim,g="Number",v=a[g],m=v.prototype,N=l(p(m))==g,I=function(t){var e,n,r,a,u,i,c,l,o=s(t,!1);if("string"==typeof o&&o.length>2)if(o=b(o),e=o.charCodeAt(0),43===e||45===e){if(n=o.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+o}for(u=o.slice(2),i=u.length,c=0;c<i;c++)if(l=u.charCodeAt(c),l<48||l>a)return NaN;return parseInt(u,r)}return+o};if(u(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var y,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(N?f((function(){m.valueOf.call(n)})):l(n)!=g)?o(new v(I(e)),n,E):I(e)},_=r?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;_.length>A;A++)c(v,y=_[A])&&!c(E,y)&&x(E,y,h(v,y));E.prototype=m,m.constructor=E,i(a,g,E)}},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("xinput",{attrs:{xmaxlength:10},on:{input:t.input}}),n("xinput",{staticStyle:{"margin-top":"10px"},attrs:{xmaxlength:10,xvalue:"禁止输入",xdisabled:!0},on:{input:t.input}})],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["input-box",{isdisabled:t.xdisabled}],style:{width:t.xsize+"px"}},[n("input",{attrs:{type:t.xtype,maxlength:t.xmaxlength,disabled:t.xdisabled,placeholder:t.xplaceholder},domProps:{value:t.currentValue},on:{input:t.inputHandle,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange}})])},i=[],c=(n("a9e3"),{props:{xtype:{type:String,default:"text"},xdisabled:{type:Boolean,default:!1},xplaceholder:{type:String,default:"请输入"},xvalue:{type:[String,Number]},xmaxlength:{type:Number},xsize:{type:Number,default:150}},data:function(){return{currentValue:void 0==this.xvalue||null==this.xvalue?"":this.xvalue}},watch:{xvalue:function(t,e){this.setCurrentValue(t)}},methods:{inputHandle:function(t){var e=event.target.value;this.setCurrentValue(e),this.$emit("input",e)},handleFocus:function(t){this.$emit("focus",t)},handleBlur:function(t){this.$emit("focus",t)},handleChange:function(t){this.$emit("focus",t)},setCurrentValue:function(t){t!==this.currentValue&&(this.currentValue=t)}}}),l=c,o=(n("99c0"),n("2877")),s=Object(o["a"])(l,u,i,!1,null,"4c0df318",null),f=s.exports,p={data:function(){return{}},methods:{input:function(t){console.log("e",t)}},components:{xinput:f}},d=p,h=Object(o["a"])(d,r,a,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-57dc6dd6.b5c8e190.js.map