(self.webpackChunkclaimmyride=self.webpackChunkclaimmyride||[]).push([[4473],{4473:function(e,t,r){"use strict";r.r(t),r.d(t,{ion_reorder:function(){return u},ion_reorder_group:function(){return f}});var n=r(5587),i=r(6304),s=r(1112),o=r(1998),l=r(8774),a=r.n(l),c=r(2322),h=r(7505),d=r(3320),u=function(){function e(t){(0,s.Z)(this,e),(0,c.r)(this,t)}return(0,o.Z)(e,[{key:"onClick",value:function(e){var t=this.el.closest("ion-reorder-group");e.preventDefault(),t&&t.disabled||e.stopImmediatePropagation()}},{key:"render",value:function(){var e=(0,h.b)(this);return(0,c.h)(c.H,{class:e},(0,c.h)("slot",null,(0,c.h)("ion-icon",{name:"ios"===e?"reorder-three-outline":"reorder-two-sharp",lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return(0,c.i)(this)}}]),e}();u.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var f=function(){function e(t){(0,s.Z)(this,e),(0,c.r)(this,t),this.ionItemReorder=(0,c.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}var t;return(0,o.Z)(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(t=(0,i.Z)(a().mark(function e(){var t,n=this;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.el.closest("ion-content"))){e.next=5;break}return e.next=4,t.getScrollElement();case 4:this.scrollEl=e.sent;case 5:return e.next=7,Promise.resolve().then(r.bind(r,5043));case 7:this.gesture=e.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return n.canStart(e)},onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 9:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=v(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var s=0,o=0;o<i.length;o++){var l=i[o];r.push(s+=l.offsetHeight),l.$ionIndex=o}var a=n.getBoundingClientRect();if(this.containerTop=a.top,this.containerBottom=a.bottom,this.scrollEl){var c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=c.top+p,this.scrollElBottom=c.bottom-p}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=m(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(g),(0,d.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,i=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),s=r+i-e.startY,o=this.itemIndexForTop(i-n);if(o!==this.lastToIndex){var l=m(t);this.lastToIndex=o,(0,d.b)(),this.reorderMove(l,o)}t.style.transform="translateY(".concat(s,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=m(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),(0,d.h)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,i=this.lastToIndex,s=m(t);i===s||void 0!==e&&!0!==e||this.el.insertBefore(t,s<i?r[i+1]:r[i]),Array.isArray(e)&&(e=y(e,s,i));for(var o=0;o<n;o++)r[o].style.transform="";t.style.transition="",t.classList.remove(g),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){for(var t=this.cachedHeights,r=0;r<t.length;r++)if(t[r]>e)return r;return t.length-1}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,i=0;i<n.length;i++){var s=n[i].style,o="";i>e&&i<=t?o="translateY(".concat(-r,"px)"):i<e&&i>=t&&(o="translateY(".concat(r,"px)")),s.transform=o}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-b:e>this.scrollElBottom&&(t=b),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=(0,h.b)(this);return(0,c.h)(c.H,{class:(e={},(0,n.Z)(e,t,!0),(0,n.Z)(e,"reorder-enabled",!this.disabled),(0,n.Z)(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return(0,c.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),e}(),m=function(e){return e.$ionIndex},v=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},p=60,b=10,g="reorder-selected",y=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()};f.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);