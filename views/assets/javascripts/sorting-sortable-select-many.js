"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=v({},e),t[M]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);V(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=!e.forceFallback&&j,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),P.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(s(D,"display",t?"none":""),!t&&D.state&&S.insertBefore(D,b),D.state=t)}function n(t,e,n){if(t){n=n||X,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(k," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(k," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return X.defaultView&&X.defaultView.getComputedStyle?n=X.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;o<a;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,a,r){var s=X.createEvent("Event"),l=(t||e[M]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=D,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,a){var r,s,l=t[M],d=l.options.onMove;return r=X.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=i,r.related=o||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),d&&(s=d.call(l,r)),s}function h(t){t.draggable=!1}function u(){H=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function m(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function g(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function v(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,y,_,D,S,T,w,x,C,E,I,O,N,B,R,q,L,A={},k=/\s+/g,M="Sortable"+(new Date).getTime(),$=window,X=$.document,Y=$.parseInt,j=!!("draggable"in X.createElement("div")),F=function(t){return t=X.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),H=!1,U=Math.abs,P=([].slice,[]),W=g(function(t,e,n){if(n&&e.scroll){var i,o,a,r,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,h=window.innerWidth,u=window.innerHeight;if(x!==n&&(w=e.scroll,x=n,w===!0)){w=n;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(i=w,o=w.getBoundingClientRect(),a=(U(o.right-d)<=s)-(U(o.left-d)<=s),r=(U(o.bottom-c)<=s)-(U(o.top-c)<=s)),a||r||(a=(h-d<=s)-(d<=s),r=(u-c<=s)-(c<=s),(a||r)&&(i=$)),A.vx===a&&A.vy===r&&A.el===i||(A.el=i,A.vx=a,A.vy=r,clearInterval(A.pid),i&&(A.pid=setInterval(function(){i===$?$.scrollTo($.pageXOffset+a*l,$.pageYOffset+r*l):(r&&(i.scrollTop+=r*l),a&&(i.scrollLeft+=a*l))},24)))}},30),V=function(t){var e=t.group;e&&"object"==("undefined"==typeof e?"undefined":_typeof(e))||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=o.filter;if(!("mousedown"===a&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(O=m(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,O),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){if(t=n(l,t.trim(),i))return d(e,t,"filter",s,i,O),!0})))return void t.preventDefault();o.handle&&!n(l,o.handle,i)||this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var i,a=this,s=a.el,d=a.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(R=t,S=s,b=n,y=b.parentNode,T=b.nextSibling,B=d.group,i=function(){a._disableDelayedDrag(),b.draggable=!0,r(b,a.options.chosenClass,!0),a._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(b,t.trim(),h)}),o(c,"mouseup",a._onDrop),o(c,"touchend",a._onDrop),o(c,"touchcancel",a._onDrop),d.delay?(o(c,"mouseup",a._disableDelayedDrag),o(c,"touchend",a._disableDelayedDrag),o(c,"touchcancel",a._disableDelayedDrag),o(c,"mousemove",a._disableDelayedDrag),o(c,"touchmove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(R={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(R,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(S,"dragstart",this._onDragStart)):this._onDragStart(R,!0);try{X.selection?X.selection.empty():window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){S&&b&&(r(b,this.options.ghostClass,!0),t.active=this,d(this,S,"start",b,S,O))},_emulateDragOver:function(){if(q){if(this._lastX===q.clientX&&this._lastY===q.clientY)return;this._lastX=q.clientX,this._lastY=q.clientY,F||s(_,"display","none");var t=X.elementFromPoint(q.clientX,q.clientY),e=t,n=" "+this.options.group.name,i=P.length;if(e)do{if(e[M]&&e[M].options.groups.indexOf(n)>-1){for(;i--;)P[i]({clientX:q.clientX,clientY:q.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);F||s(_,"display","")}},_onTouchMove:function(e){if(R){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-R.clientX,o=n.clientY-R.clientY,a=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";L=!0,q=n,s(_,"webkitTransform",a),s(_,"mozTransform",a),s(_,"msTransform",a),s(_,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!_){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;_=b.cloneNode(!0),r(_,i.ghostClass,!1),r(_,i.fallbackClass,!0),s(_,"top",e.top-Y(n.marginTop,10)),s(_,"left",e.left-Y(n.marginLeft,10)),s(_,"width",e.width),s(_,"height",e.height),s(_,"opacity","0.8"),s(_,"position","fixed"),s(_,"zIndex","100000"),s(_,"pointerEvents","none"),i.fallbackOnBody&&X.body.appendChild(_)||S.appendChild(_),t=_.getBoundingClientRect(),s(_,"width",2*e.width-t.width),s(_,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==B.pull&&(D=b.cloneNode(!0),s(D,"display","none"),S.insertBefore(D,b)),e?("touch"===e?(o(X,"touchmove",this._onTouchMove),o(X,"touchend",this._onDrop),o(X,"touchcancel",this._onDrop)):(o(X,"mousemove",this._onTouchMove),o(X,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(X,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,a,r=this.el,l=this.options,d=l.group,h=d.put,p=B===d,m=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),L=!0,B&&!l.disabled&&(p?m||(a=!S.contains(b)):B.pull&&h&&(B.name===d.name||h.indexOf&&~h.indexOf(B.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(W(t,l,this.el),H)return;if(i=n(t.target,l.draggable,r),o=b.getBoundingClientRect(),a)return e(!0),void(D||T?S.insertBefore(b,D||T):m||S.appendChild(b));if(0===r.children.length||r.children[0]===_||r===t.target&&(i=f(r,t))){if(i){if(i.animated)return;v=i.getBoundingClientRect()}e(p),c(S,r,b,o,i,v)!==!1&&(b.contains(r)||(r.appendChild(b),y=r),this._animate(o,b),i&&this._animate(v,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[M]){C!==i&&(C=i,E=s(i),I=s(i.parentNode));var g,v=i.getBoundingClientRect(),w=v.right-v.left,x=v.bottom-v.top,O=/left|right|inline/.test(E.cssFloat+E.display)||"flex"==I.display&&0===I["flex-direction"].indexOf("row"),N=i.offsetWidth>b.offsetWidth,R=i.offsetHeight>b.offsetHeight,q=(O?(t.clientX-v.left)/w:(t.clientY-v.top)/x)>.5,A=i.nextElementSibling,k=c(S,r,b,o,i,v);if(k!==!1){if(H=!0,setTimeout(u,30),e(p),1===k||k===-1)g=1===k;else if(O){var $=b.offsetTop,X=i.offsetTop;g=$===X?i.previousElementSibling===b&&!N||q&&N:X>$}else g=A!==b&&!R||q&&R;b.contains(r)||(g&&!A?r.appendChild(b):i.parentNode.insertBefore(b,g?A:i)),y=b.parentNode,this._animate(o,b),this._animate(v,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(X,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(A.pid),clearTimeout(this._dragStartTimer),a(X,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(X,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(L&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),_&&_.parentNode.removeChild(_),b&&(this.nativeDraggable&&a(b,"dragend",this),h(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),S!==y?(N=m(b),N>=0&&(d(null,y,"sort",b,S,O,N),d(this,S,"sort",b,S,O,N),d(null,y,"add",b,S,O,N),d(this,S,"remove",b,S,O,N))):(D&&D.parentNode.removeChild(D),b.nextSibling!==T&&(N=m(b),N>=0&&(d(this,S,"update",b,S,O,N),d(this,S,"sort",b,S,O,N)))),t.active&&(null!==N&&N!==-1||(N=O),d(this,S,"end",b,S,O,N),this.save())),S=b=y=_=T=D=w=x=R=q=L=N=C=E=B=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):"drop"!==e&&"dragend"!==e||this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,a=i.length,r=this.options;o<a;o++)t=i[o],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var a=i.children[o];n(a,this.options.draggable,i)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&V(n)))},destroy:function(){var t=this.el;t[M]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),P.splice(P.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:v,throttle:g,closest:n,toggleClass:r,index:m},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){function e(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,t.isPlainObject(i)&&i),this.init()}var n=t("body"),i="qor.chooser.sortable",o="enable."+i,a="click."+i,r="disable."+i,s=".select2-selection__choice",l=".select2-container",d=".select2-search__field",c=".qor-dragable",h=".qor-dragable__list",u=".qor-dragable__list-handle",f=".qor-dragable__list-delete",p=".qor-dragable__list-data",m=".qor-dragable__button-add",g=".qor-bottomsheets",v="sortable-select-many-loaded",b="qor-bottomsheets__select-many",y="is_selected";return e.prototype={constructor:e,init:function(){var e=this.$element,n=e.data(),i=e.parents(c),o=e.data("placeholder"),a=this,r={minimumResultsForSearch:8,dropdownParent:e.parent()};this.$selector=i.find(p),this.$sortableList=i.find(h),this.$parent=i;var m=i.find(h)[0];this.sortable=window.Sortable.create(m,{animation:150,handle:u,filter:f,dataIdAttr:"data-index",onFilter:function(e){var n=t(e.item),i=n.data("index");n.remove(),a.removeItemsFromList(i)},onUpdate:function(){a.renderOption()}}),n.remoteData&&(r.ajax=t.fn.select2.ajaxCommonOptions(n),r.templateResult=function(n){var i=e.parents(".qor-field").find('[name="select2-result-template"]');return t.fn.select2.ajaxFormatResult(n,i)},r.templateSelection=function(n){if(n.loading)return n.text;var i=e.parents(".qor-field").find('[name="select2-selection-template"]');return t.fn.select2.ajaxFormatResult(n,i)}),e.is("select")&&(e.on("change",function(){setTimeout(function(){i.find(s).hide()},1),t(d).attr("placeholder",o)}).on("select2:select",function(t){console.log(t.params.data),a.addItems(t.params.data)}).on("select2:unselect",function(t){a.removeItems(t.params.data)}),e.select2(r),i.find(l).hide(),i.find(s).hide(),t(d).attr("placeholder",o)),this.bind()},bind:function(){this.$parent.on(a,m,this.show.bind(this))},unbind:function(){this.$parent.off(a,m,this.show)},show:function(){var e=this.$parent.find(".qor-dragable__button-add");if(e.attr("data-selectmany-url")){var i=e.data();this.BottomSheets=n.data("qor.bottomsheets"),this.selectedIconTmpl=t('[name="select-many-selected-icon"]').html(),i.url=i.selectmanyUrl,this.BottomSheets.open(i,this.handleBottomSelect.bind(this))}else{var o=this.$parent.find(l);o.show(),this.$parent.find(m).hide(),setTimeout(function(){o.find(d).click()},100)}},handleBottomSelect:function(){var e=t(g),n={onSelect:this.onSelectResults.bind(this),onSubmit:this.onSubmitResults.bind(this)};e.qorSelectCore(n).addClass(b),this.initItems()},onSelectResults:function(e){var n=this.$element.data("remote-data-primary-key"),i={},o=e.$clickElement,a=o.find("td:first");console.log("onSelectResults data:"),console.log(e),n?i.id=e[n]:i.id=e.primaryKey||e.Id||e.ID,i.value=e.Name||e.text||e.Text||e.Title||e.Code||i.id,console.log("onSelectResults obj"),console.log(i),t(h).find('li[data-index="'+i.id+'"]').length?(this.removeItems(i),o.removeClass(y),a.find(".qor-select__select-icon").remove()):(this.addItems(i),o.addClass(y),a.append(this.selectedIconTmpl))},onSubmitResults:function(t){this.addItems(t,!0)},initItems:function(){var e,n=t(g).find("tbody tr"),i=this.selectedIconTmpl,o=[],a=this.$sortableList.find("[data-index]");a.each(function(){o.push(t(this).data("index"))}),n.each(function(){var n=t(this),a=n.find("td:first");e=n.data().primaryKey,"-1"!=o.indexOf(e)&&(n.addClass(y),a.append(i))})},renderItem:function(t){return window.Mustache.render(e.LIST_HTML,t)},renderOption:function(){var t=this.sortable.toArray(),n=this.$parent.find(p);n.empty(),window._.each(t,function(t){n.append(window.Mustache.render(e.OPTION_HTML,{value:t}))})},removeItems:function(e){t(h).find('li[data-index="'+e.id+'"]').remove(),this.renderOption()},removeItemsFromList:function(){this.renderOption()},addItems:function(t,e){this.$sortableList.append(this.renderItem(t)),this.renderOption(),e&&this.BottomSheets.hide()},destroy:function(){this.sortable.destroy(),this.unbind(),this.$element.select2("destroy").removeData(i)}},e.DEFAULTS={},e.LIST_HTML='<li data-index="[[id]]" data-value="[[value]]"><span>[[value]]</span><div><i class="material-icons qor-dragable__list-delete">clear</i><i class="material-icons qor-dragable__list-handle">drag_handle</i></div></li>',e.OPTION_HTML='<option selected value="[[value]]"></option>',e.plugin=function(n){return this.each(function(){var o,a=t(this),r=a.data(i);if(!r){if(/destroy/.test(n))return;a.data(i,r=new e(this,n))}"string"==typeof n&&t.isFunction(o=r[n])&&o.apply(r)})},t(function(){var n='[data-toggle="qor.chooser.sortable"]';t("body").data(v)||(t("body").data(v,!0),t(document).on(r,function(i){e.plugin.call(t(n,i.target),"destroy")}).on(o,function(i){e.plugin.call(t(n,i.target))}).triggerHandler(o))}),e});