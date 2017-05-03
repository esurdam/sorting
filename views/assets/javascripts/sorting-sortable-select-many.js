"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=v({},e),t[k]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);V(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=e.forceFallback?!1:F,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),U.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(s(D,"display",t?"none":""),!t&&D.state&&S.insertBefore(D,b),D.state=t)}function n(t,e,n){if(t){n=n||Y,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(M," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(M," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return Y.defaultView&&Y.defaultView.getComputedStyle?n=Y.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;a>o;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,a,r){var s=Y.createEvent("Event"),l=(t||e[k]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=D,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,a){var r,s,l=t[k],d=l.options.onMove;return r=Y.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=i,r.related=o||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),d&&(s=d.call(l,r)),s}function u(t){t.draggable=!1}function f(){H=!1}function h(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function m(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function v(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,y,_,D,S,T,w,x,C,E,N,O,I,B,L,A,R,q={},M=/\s+/g,k="Sortable"+(new Date).getTime(),X=window,Y=X.document,j=X.parseInt,F=!!("draggable"in Y.createElement("div")),$=function(t){return t=Y.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),H=!1,P=Math.abs,U=([].slice,[]),W=m(function(t,e,n){if(n&&e.scroll){var i,o,a,r,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,u=window.innerWidth,f=window.innerHeight;if(x!==n&&(w=e.scroll,x=n,w===!0)){w=n;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(i=w,o=w.getBoundingClientRect(),a=(P(o.right-d)<=s)-(P(o.left-d)<=s),r=(P(o.bottom-c)<=s)-(P(o.top-c)<=s)),a||r||(a=(s>=u-d)-(s>=d),r=(s>=f-c)-(s>=c),(a||r)&&(i=X)),q.vx===a&&q.vy===r&&q.el===i||(q.el=i,q.vx=a,q.vy=r,clearInterval(q.pid),i&&(q.pid=setInterval(function(){i===X?X.scrollTo(X.pageXOffset+a*l,X.pageYOffset+r*l):(r&&(i.scrollTop+=r*l),a&&(i.scrollLeft+=a*l))},24)))}},30),V=function(t){var e=t.group;e&&"object"==("undefined"==typeof e?"undefined":_typeof(e))||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=o.filter;if(!("mousedown"===a&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(O=g(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,O),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){return t=n(l,t.trim(),i),t?(d(e,t,"filter",s,i,O),!0):void 0})))return void t.preventDefault();o.handle&&!n(l,o.handle,i)||this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var i,a=this,s=a.el,d=a.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(L=t,S=s,b=n,y=b.parentNode,T=b.nextSibling,B=d.group,i=function(){a._disableDelayedDrag(),b.draggable=!0,r(b,a.options.chosenClass,!0),a._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(b,t.trim(),u)}),o(c,"mouseup",a._onDrop),o(c,"touchend",a._onDrop),o(c,"touchcancel",a._onDrop),d.delay?(o(c,"mouseup",a._disableDelayedDrag),o(c,"touchend",a._disableDelayedDrag),o(c,"touchcancel",a._disableDelayedDrag),o(c,"mousemove",a._disableDelayedDrag),o(c,"touchmove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(L={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(L,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(S,"dragstart",this._onDragStart)):this._onDragStart(L,!0);try{Y.selection?Y.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){S&&b&&(r(b,this.options.ghostClass,!0),t.active=this,d(this,S,"start",b,S,O))},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,$||s(_,"display","none");var t=Y.elementFromPoint(A.clientX,A.clientY),e=t,n=" "+this.options.group.name,i=U.length;if(e)do{if(e[k]&&e[k].options.groups.indexOf(n)>-1){for(;i--;)U[i]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);$||s(_,"display","")}},_onTouchMove:function(e){if(L){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-L.clientX,o=n.clientY-L.clientY,a=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";R=!0,A=n,s(_,"webkitTransform",a),s(_,"mozTransform",a),s(_,"msTransform",a),s(_,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!_){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;_=b.cloneNode(!0),r(_,i.ghostClass,!1),r(_,i.fallbackClass,!0),s(_,"top",e.top-j(n.marginTop,10)),s(_,"left",e.left-j(n.marginLeft,10)),s(_,"width",e.width),s(_,"height",e.height),s(_,"opacity","0.8"),s(_,"position","fixed"),s(_,"zIndex","100000"),s(_,"pointerEvents","none"),i.fallbackOnBody&&Y.body.appendChild(_)||S.appendChild(_),t=_.getBoundingClientRect(),s(_,"width",2*e.width-t.width),s(_,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==B.pull&&(D=b.cloneNode(!0),s(D,"display","none"),S.insertBefore(D,b)),e?("touch"===e?(o(Y,"touchmove",this._onTouchMove),o(Y,"touchend",this._onDrop),o(Y,"touchcancel",this._onDrop)):(o(Y,"mousemove",this._onTouchMove),o(Y,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(Y,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,a,r=this.el,l=this.options,d=l.group,u=d.put,p=B===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),R=!0,B&&!l.disabled&&(p?g||(a=!S.contains(b)):B.pull&&u&&(B.name===d.name||u.indexOf&&~u.indexOf(B.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(W(t,l,this.el),H)return;if(i=n(t.target,l.draggable,r),o=b.getBoundingClientRect(),a)return e(!0),void(D||T?S.insertBefore(b,D||T):g||S.appendChild(b));if(0===r.children.length||r.children[0]===_||r===t.target&&(i=h(r,t))){if(i){if(i.animated)return;v=i.getBoundingClientRect()}e(p),c(S,r,b,o,i,v)!==!1&&(b.contains(r)||(r.appendChild(b),y=r),this._animate(o,b),i&&this._animate(v,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[k]){C!==i&&(C=i,E=s(i),N=s(i.parentNode));var m,v=i.getBoundingClientRect(),w=v.right-v.left,x=v.bottom-v.top,O=/left|right|inline/.test(E.cssFloat+E.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),I=i.offsetWidth>b.offsetWidth,L=i.offsetHeight>b.offsetHeight,A=(O?(t.clientX-v.left)/w:(t.clientY-v.top)/x)>.5,q=i.nextElementSibling,M=c(S,r,b,o,i,v);if(M!==!1){if(H=!0,setTimeout(f,30),e(p),1===M||-1===M)m=1===M;else if(O){var X=b.offsetTop,Y=i.offsetTop;m=X===Y?i.previousElementSibling===b&&!I||A&&I:Y>X}else m=q!==b&&!L||A&&L;b.contains(r)||(m&&!q?r.appendChild(b):i.parentNode.insertBefore(b,m?q:i)),y=b.parentNode,this._animate(o,b),this._animate(v,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(Y,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(q.pid),clearTimeout(this._dragStartTimer),a(Y,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(Y,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(R&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),_&&_.parentNode.removeChild(_),b&&(this.nativeDraggable&&a(b,"dragend",this),u(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),S!==y?(I=g(b),I>=0&&(d(null,y,"sort",b,S,O,I),d(this,S,"sort",b,S,O,I),d(null,y,"add",b,S,O,I),d(this,S,"remove",b,S,O,I))):(D&&D.parentNode.removeChild(D),b.nextSibling!==T&&(I=g(b),I>=0&&(d(this,S,"update",b,S,O,I),d(this,S,"sort",b,S,O,I)))),t.active&&(null!==I&&-1!==I||(I=O),d(this,S,"end",b,S,O,I),this.save())),S=b=y=_=T=D=w=x=L=A=R=I=C=E=B=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):"drop"!==e&&"dragend"!==e||this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,a=i.length,r=this.options;a>o;o++)t=i[o],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var a=i.children[o];n(a,this.options.draggable,i)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&V(n)))},destroy:function(){var t=this.el;t[k]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),U.splice(U.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:v,throttle:m,closest:n,toggleClass:r,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){function e(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,t.isPlainObject(i)&&i),this.init()}var n="qor.chooser.sortable",i="enable."+n,o="click."+n,a="disable."+n,r=".select2-selection__choice",s=".select2-selection__choice__remove",l=".select2-container",d=".select2-search__field",c=".qor-dragable",u=".qor-dragable__list",f=".qor-dragable__list-handle",h=".qor-dragable__list-delete",p=".qor-dragable__list-data",g=".qor-dragable__button-add",m="sortable-select-many-loaded";return e.prototype={constructor:e,init:function(){var e=this.$element,n=e.data(),i=e.parents(c),o=e.data("placeholder"),a=this,s={minimumResultsForSearch:8,dropdownParent:e.parent()};this.$selector=i.find(p),this.$sortableList=i.find(u),this.$parent=i;var g=i.find(u)[0];this.sortable=window.Sortable.create(g,{animation:150,handle:f,filter:h,dataIdAttr:"data-index",onFilter:function(e){var n=t(e.item),i=n.data("index");n.remove(),a.removeItemsFromList(i)},onUpdate:function(){a.renderOption()}}),n.remoteData&&(s.ajax=t.fn.select2.ajaxCommonOptions(n),s.templateResult=function(n){var i=e.parents(".qor-field").find('[name="select2-result-template"]');return t.fn.select2.ajaxFormatResult(n,i)},s.templateSelection=function(n){if(n.loading)return n.text;var i=e.parents(".qor-field").find('[name="select2-selection-template"]');return t.fn.select2.ajaxFormatResult(n,i)}),e.on("change",function(){setTimeout(function(){i.find(r).hide()},1),t(d).attr("placeholder",o)}).on("select2:select",function(t){a.addItems(t.params.data)}).on("select2:unselect",function(t){a.removeItems(t.params.data)}),e.select2(s),i.find(l).hide(),i.find(r).hide(),t(d).attr("placeholder",o),this.bind()},bind:function(){this.$parent.on(o,g,this.show.bind(this))},unbind:function(){this.$parent.off(o,g,this.show)},show:function(){var t=this.$parent.find(l);t.show(),this.$parent.find(g).hide(),setTimeout(function(){t.find(d).click()},100)},renderItem:function(t){return window.Mustache.render(e.LIST_HTML,t)},renderOption:function(){var t=this.sortable.toArray(),n=this.$selector;n.empty(),window._.each(t,function(t){n.append(window.Mustache.render(e.OPTION_HTML,{value:t}))})},removeItems:function(e){t(u).find('li[data-index="'+e.id+'"]').remove(),this.renderOption()},removeItemsFromList:function(t){this.$parent.find(r).filter('[option-id="'+t+'"]').find(s).click(),this.renderOption()},addItems:function(t){t.value=t.Name||t.text||t.Text||t.Title||t.Code,this.$sortableList.append(this.renderItem(t)),this.renderOption()},destroy:function(){this.sortable.destroy(),this.unbind(),this.$element.select2("destroy").removeData(n)}},e.DEFAULTS={},e.LIST_HTML='<li data-index=[[id]] data-value=[[value]]><span>[[value]]</span><div><i class="material-icons qor-dragable__list-delete">clear</i><i class="material-icons qor-dragable__list-handle">drag_handle</i></div></li>',e.OPTION_HTML="<option selected value=[[value]]></option>",e.plugin=function(i){return this.each(function(){var o,a=t(this),r=a.data(n);if(!r){if(/destroy/.test(i))return;a.data(n,r=new e(this,i))}"string"==typeof i&&t.isFunction(o=r[i])&&o.apply(r)})},t(function(){var n='select[data-toggle="qor.chooser.sortable"]';t("body").data(m)||(t("body").data(m,!0),t(document).on(a,function(i){e.plugin.call(t(n,i.target),"destroy")}).on(i,function(i){e.plugin.call(t(n,i.target))}).triggerHandler(i))}),e});