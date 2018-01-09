"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){function e(t,e,o){if(o>=t.length)for(var i=o-t.length;1+i--;)t.push(void 0);return t.splice(o,0,t.splice(e,1)[0]),t}function o(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,t.isPlainObject(i)&&i),this.init()}var i="qor.collection.sortable",n="click."+i,r="> .qor-field__block > .qor-sortable__item",s=">.qor-sortable__button > .qor-sortable__button-change",l=">.qor-sortable__button > .qor-sortable__button-done",d=">.qor-field__block > .qor-sortable__item > .qor-sortable__change .qor-sortable__button-move",a="> .qor-sortable__change > .qor-sortable__action";return o.prototype={constructor:o,init:function(){this.bind(),this.initItemOrder()},bind:function(){this.$element.on(n,d,this.moveItem.bind(this)).on(n,l,this.finishMoveItem.bind(this)).on(n,s,this.startMoveItem.bind(this))},unbind:function(){this.$element.off(n,d).off(n,l).off(n,s)},initItemOrder:function(e){var i=this.$element.find(r).not(".is-delete,.qor-fieldset--new");if(i.length){this.$item=i;var n=i.find(a).find(".qor-sortable__action-position"),s={},l=[],d=i.length,c=i.first().html(),f=void 0,h=void 0;n.length&&n.remove(),h||(f=c.match(/(\w+)\="(\S*\[\d+\]\S*)"/),f.length&&(f=f[2],h=f.match(/^(\S*)\[(\d+)\]([^\[\]]*)$/),h.length&&(h=h[1]))),i.each(function(){var i=t(this),n=i.find(a),r=parseInt(i.attr("order-index"));s.itemTotal=d,s.itemIndex=r,l.push(r),n.prepend('<select class="qor-sortable__action-position"></select>');for(var c=1;c<=d;c++){var f={},u=void 0;u=r+1==c,f=t.extend({},s,{selectorPosition:c,isSelected:u}),n.find("select").append(window.Mustache.render(o.OPTION_HTML,f))}if(e){var b=void 0,m=void 0,_=void 0,p=/\[\d+\]/.test(h),q=t(this).find('[name^="'+h+'"]');if(!q.length)return;q.each(function(){b=t(this).prop("name"),_=b.match(/\.\w+$/),m="["+r+"]",b=p?b.replace(/\[\d+\]\.\w+$/,""+m+_):b.replace(/\[\d+\]/,m),t(this).prop("name",b)})}i.data(s)}),this.itemOrderArr=this.itemOrderArr||l}},moveItem:function(o){var i=t(o.target).closest(".qor-sortable__item"),n=i.data().itemIndex,r=parseInt(i.find(".qor-sortable__action-position").val())-1,s=this.$item,l=[];r!=n&&(l=e(this.itemOrderArr,n,r),l.forEach(function(t){var e=l.indexOf(t);s.filter('[order-item="item_'+t+'"]').attr("order-index",e).css("order",e)}),this.itemOrderArr=l,this.initItemOrder(!0))},finishMoveItem:function(e){var o=t(e.target),i=this.$element,n=i.find(r).not(".is-delete,.qor-fieldset--new"),l=i.find("> .qor-field__block > .qor-sortable__button-add"),d=n.find("> .qor-sortable__button-delete"),c=n.find(a);o.hide(),c.hide(),i.find(s).show(),l.show(),d.show()},startMoveItem:function(e){var o=t(e.target),i=this.$element,n=i.find(r).not(".is-delete,.qor-fieldset--new"),s=i.find("> .qor-field__block > .qor-sortable__button-add"),d=n.find("> .qor-sortable__button-delete"),c=n.find(a);if(!n.length)return!1;o.hide(),i.find(l).show(),c.show(),s.hide(),d.hide(),this.initItemOrder()},destroy:function(){this.unbind(),this.$element.removeData(i)}},o.DEFAULTS={},o.OPTION_HTML='<option value="[[selectorPosition]]" [[#isSelected]]selected[[/isSelected]]>[[selectorPosition]] of [[itemTotal]]</option>',o.plugin=function(e){return this.each(function(){var n,r=t(this),s=r.data(i);if(!s){if(/destroy/.test(e))return;r.data(i,s=new o(this,e))}"string"==typeof e&&t.isFunction(n=s[e])&&n.apply(s)})},t(function(){var e='[data-toggle="qor.collection.sortable"]';t("body").data("sortable-collection-loaded")||(t("body").data("sortable-collection-loaded",!0),t(document).on("disable.qor.collection.sortable",function(i){o.plugin.call(t(e,i.target),"destroy")}).on("enable.qor.collection.sortable",function(i){o.plugin.call(t(e,i.target))}).triggerHandler("enable.qor.collection.sortable"))}),o});