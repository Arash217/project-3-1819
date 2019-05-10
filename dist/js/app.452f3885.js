(function(e){function t(t){for(var n,r,l=t[0],o=t[1],u=t[2],d=0,g=[];d<l.length;d++)r=l[d],s[r]&&g.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/project-3-1819/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},1823:function(e,t,a){"use strict";var n=a("5e90"),s=a.n(n);s.a},"3b92":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"theme-select-container"},[a("label",{attrs:{for:"theme"}},[e._v("Theme:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.theme,expression:"theme"}],attrs:{name:"theme",id:"theme"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.theme=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"light"}},[e._v("Light")]),a("option",{attrs:{value:"dark"}},[e._v("Dark")])])]),a("tags-input",{class:e.themeClass,attrs:{suggestedTags:e.suggestedTags},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}}),a("div",{staticClass:"array-viewer-container"},[a("span",{staticClass:"array-viewer-title"},[e._v("Suggested tags:")]),a("array-viewer",{staticClass:"array-viewer",attrs:{array:e.suggestedTags}})],1),a("div",{staticClass:"array-viewer-container"},[a("span",{staticClass:"array-viewer-title"},[e._v("Selected tags:")]),a("array-viewer",{staticClass:"array-viewer",attrs:{array:e.tags}})],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("ul",{staticClass:"tags"},[e._l(e.selectedTags,function(t){return a("tag",{staticClass:"tag",attrs:{text:t,toBeDeleted:t===e.tagToBeDeleted},on:{input:e.removeTag,edit:e.update}})}),a("li",{staticClass:"input-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"tag-input",attrs:{type:"text",placeholder:"Add a tag"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.filter],focus:e.filter,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInput(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleDelete(t)}}})])],2),a("tags-list",{directives:[{name:"show",rawName:"v-show",value:e.filteredTags.length>0,expression:"filteredTags.length > 0"}],attrs:{value:e.filteredTags},on:{input:e.addTag}})],1)},l=[],o=a("75fc"),u=(a("6762"),a("2fdb"),a("386d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"suggested-tags"},e._l(e.value,function(t){return a("li",[a("button",{staticClass:"suggested-tag",on:{click:function(a){return e.$emit("input",t)}}},[e._v("\n            "+e._s(t)+"\n        ")])])}),0)}),c=[],d={props:["value"]},g=d,h=(a("1823"),a("2877")),f=Object(h["a"])(g,u,c,!1,null,"74e83fcc",null),p=f.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:{highlight:e.toBeDeleted}},[a("div",{staticClass:"tag-content"},[a("span",{ref:"tagSpan",staticClass:"tag-span",class:{invisible:e.editMode},on:{click:e.handleClick}},[e._v(e._s(e.tagText))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tagText,expression:"tagText"},{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],ref:"tagInput",staticClass:"tag-edit",style:{width:e.width},attrs:{type:"text"},domProps:{value:e.tagText},on:{input:[function(t){t.target.composing||(e.tagText=t.target.value)},e.handleInput],keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.edit(t)}}})]),a("div",{staticClass:"tag-actions"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.editMode,expression:"!editMode"}],staticClass:"close-button",on:{click:function(t){return e.$emit("input",e.tagText)}}}),a("button",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"undo-button",on:{click:e.undo}})])])},m=[],T={props:["text","toBeDeleted"],mounted:function(){this.tagText=this.text},data:function(){return{editMode:!1,tagText:"",width:null,originalTagText:""}},methods:{handleClick:function(){this.editMode=!0,this.originalTagText=this.tagText,this.handleInput()},handleInput:function(){var e=this;this.$nextTick(function(){e.width=e.$refs.tagSpan.getBoundingClientRect().width+"px",e.$refs.tagInput.focus(),e.$refs.tagInput.selectionStart=e.tagText.length})},undo:function(){this.editMode=!1,this.tagText=this.originalTagText},edit:function(){this.tagText.length>0&&(this.$emit("edit",{tag:this.originalTagText,newTagText:this.tagText}),this.editMode=!1)}},watch:{}},y=T,x=(a("d68e"),Object(h["a"])(y,v,m,!1,null,"3731104d",null)),w=x.exports,b={components:{TagsList:p,Tag:w},props:{value:{type:Array},suggestedTags:{type:Array,required:!1}},mounted:function(){this.selectedTags=this.value},data:function(){return{search:"",filteredTags:[],selectedTags:[],tagToBeDeleted:null,deleteTimer:null}},methods:{filter:function(){var e=this;if(this.search){var t=this.suggestedTags.filter(function(t){return!e.selectedTags.includes(t)});this.filteredTags=t.filter(function(t){return t.includes(e.search)})}else this.filteredTags=[]},handleDelete:function(e){this.tagToBeDeleted&&(this.selectedTags.pop(),this.tagToBeDeleted=null),"Backspace"===e.code&&0===this.search.length&&(this.tagToBeDeleted=this.selectedTags[this.selectedTags.length-1],this.startDeleteTimer())},startDeleteTimer:function(){var e=this;clearTimeout(this.deleteTimer),this.deleteTimer=setTimeout(function(){e.tagToBeDeleted=null},1e3)},handleInput:function(){""===this.search.trim()||this.value.includes(this.search)||this.addTag(this.search)},addTag:function(e){this.selectedTags.push(e),this.search="",this.filter(),this.$refs.search.focus(),this.emitTags()},removeTag:function(e){this.selectedTags=this.selectedTags.filter(function(t){return t!==e}),this.emitTags()},emitTags:function(){this.$emit("input",this.selectedTags)},update:function(e){var t=e.tag,a=e.newTagText,n=this.selectedTags.indexOf(t),s=Object(o["a"])(this.selectedTags);s[n]=a,this.selectedTags=s,this.emitTags()}}},_=b,k=(a("c259"),Object(h["a"])(_,r,l,!1,null,"436b50f0",null)),C=k.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    [\n    "),e._l(e.array,function(t){return a("span",[e._v("\n        "+e._s(t)+",\n    ")])}),e._v("\n    ]\n")],2)},D=[],j={props:["array"]},M=j,$=Object(h["a"])(M,O,D,!1,null,null,null),B=$.exports,S={components:{TagsInput:C,ArrayViewer:B},data:function(){return{theme:"light",tags:["Higgsboson","Large Hadron Collider","European Organization for Nuclear Research","Antihydrogen","World Wide Web","Accelerators","Subatomic particles","Geneva","Proton"],suggestedTags:["Black hole","Antimatter","Dark matter ","Universe"]}},computed:{themeClass:function(){return"theme-"+this.theme}}},I=S,P=(a("034f"),Object(h["a"])(I,s,i,!1,null,null,null)),A=P.exports,E=a("2f62");n["a"].use(E["a"]);var N=new E["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({store:N,render:function(e){return e(A)}}).$mount("#app")},"5e90":function(e,t,a){},"64a9":function(e,t,a){},c259:function(e,t,a){"use strict";var n=a("c3dc"),s=a.n(n);s.a},c3dc:function(e,t,a){},d68e:function(e,t,a){"use strict";var n=a("3b92"),s=a.n(n);s.a}});
//# sourceMappingURL=app.452f3885.js.map