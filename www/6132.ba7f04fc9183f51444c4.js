(self.webpackChunkclaimmyride=self.webpackChunkclaimmyride||[]).push([[6132],{6132:function(t,e,n){"use strict";n.r(e),n.d(e,{AddTripPageModule:function(){return Z}});var r=n(1116),i=n(1462),o=n(8809),s=n(578),d=n(9609),a=n(5803),c=n(2123),p=n(2827);function u(t,e){if(1&t){var n=a.EpF();a.TgZ(0,"ion-item",16),a.NdJ("click",function(){var t=a.CHM(n).$implicit;return a.oxw(2).selectStartAddress(t)}),a._uU(1),a.qZA()}if(2&t){var r=e.$implicit;a.xp6(1),a.Oqu(r.description)}}function l(t,e){if(1&t&&(a.TgZ(0,"div",13),a.TgZ(1,"ion-list-header",14),a._uU(2,"Suggested Addresses"),a.qZA(),a.YNc(3,u,2,1,"ion-item",15),a.qZA()),2&t){var n=a.oxw();a.xp6(3),a.Q6J("ngForOf",n.startAddressPredictions)}}function g(t,e){if(1&t){var n=a.EpF();a.TgZ(0,"ion-item",16),a.NdJ("click",function(){var t=a.CHM(n).$implicit;return a.oxw(2).selectEndAddress(t)}),a._uU(1),a.qZA()}if(2&t){var r=e.$implicit;a.xp6(1),a.Oqu(r.description)}}function f(t,e){if(1&t&&(a.TgZ(0,"div",13),a.TgZ(1,"ion-list-header",14),a._uU(2,"Suggested Addresses"),a.qZA(),a.YNc(3,g,2,1,"ion-item",15),a.qZA()),2&t){var n=a.oxw();a.xp6(3),a.Q6J("ngForOf",n.endAddressPredictions)}}function _(t,e){if(1&t&&(a.TgZ(0,"p",17),a._uU(1),a.qZA()),2&t){var n=a.oxw();a.xp6(1),a.Oqu(n.trip.error)}}function h(t,e){1&t&&a._UZ(0,"ion-spinner")}var m=[{path:"",component:function(){function t(t,e,n,r,i,o,s){this.tripService=t,this.navCtrl=e,this.alertCtrl=n,this.route=r,this.ngZone=i,this.router=o,this.driverService=s,this.trip={},this.startAddressPredictions=[],this.endAddressPredictions=[],google&&(this.autocomplete=new google.maps.places.AutocompleteService)}return t.prototype.ngOnInit=function(){var t=this;this.route.queryParamMap.subscribe(function(e){var n=e.params;console.log(n),t.trip.driver_id=n.driver_id,t.trip.vehicle_id=n.vehicle_id,t.trip.trip_tax_rate1=n.trip_tax_rate1,t.trip.trip_tax_rate2=n.trip_tax_rate2,t.trip.units=n.units,t.trip.start_date=d().format("YYYY-MM-DD HH:mm:ss"),t.trip.end_date=d().format("YYYY-MM-DD HH:mm:ss")})},t.prototype.autocompleteStartAddress=function(){var t=this;this.autocomplete.getPlacePredictions({input:this.trip.start_address,componentRestrictions:{country:"nz"}},function(e,n){t.ngZone.run(function(){t.startAddressSelected?t.startAddressSelected=!1:(t.startAddressPredictions=[],e&&e.forEach(function(e){t.startAddressPredictions.push(e)}))})})},t.prototype.autocompleteEndAddress=function(){var t=this;this.autocomplete.getPlacePredictions({input:this.trip.end_address,componentRestrictions:{country:"nz"}},function(e,n){t.ngZone.run(function(){t.endAddressSelected?t.endAddressSelected=!1:(t.endAddressPredictions=[],e&&e.forEach(function(e){t.endAddressPredictions.push(e)}))})})},t.prototype.selectStartAddress=function(t){this.trip.start_address=t.description,this.startAddressPredictions=[],this.startAddressSelected=!0},t.prototype.selectEndAddress=function(t){this.trip.end_address=t.description,this.endAddressPredictions=[],this.endAddressSelected=!0},t.prototype.create=function(){var t=this;this.trip.loading=!0;var e=new google.maps.DirectionsService,n={origin:this.trip.start_address,destination:this.trip.end_address,travelMode:google.maps.TravelMode.DRIVING};e.route(n,function(e,n){if("OK"===n){var r=e.routes[0].legs[0];return console.log(e),t.trip.start_latitude=r.start_location.lat(),t.trip.start_longitude=r.start_location.lng(),t.trip.end_latitude=r.end_location.lat(),t.trip.end_longitude=r.end_location.lng(),t.trip.total_distance=r.distance.value/1e3,void t.tripService.createTrip(t.trip).then(function(e){t.trip={},t.driverService.setDriversUpdated(),setTimeout(function(){t.router.navigate(["/trip/"+e.id])},200),t.navCtrl.back()})}t.alertCtrl.create({header:"Error",message:"There was an error adding your trip. Please make sure the start and end address you have entered are correct and try again.",buttons:[{text:"Dismiss",role:"cancel",handler:function(t){}}]}).then(function(t){t.present()})})},t.\u0275fac=function(e){return new(e||t)(a.Y36(c.a),a.Y36(o.SH),a.Y36(o.Br),a.Y36(s.gz),a.Y36(a.R0b),a.Y36(s.F0),a.Y36(p.F))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-add-trip"]],decls:23,vars:7,consts:[["color","light"],["slot","start"],["defaultHref","/tabs/track","color","primary"],["color","primary"],[1,"signup"],[1,"signup__form"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange","ionChange"],["class","search-results",4,"ngIf"],["class","signup__form__error",4,"ngIf"],[1,"signup-footer"],["color","primary","expand","full","shape","round",1,"signup-footer__button",3,"disabled","click"],[4,"ngIf"],[1,"search-results"],["mode","md"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"signup__form__error"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-back-button",2),a.qZA(),a.TgZ(4,"ion-title",3),a._uU(5,"Add Trip"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content",4),a.TgZ(7,"ion-list",5),a.TgZ(8,"ion-item"),a.TgZ(9,"ion-label",6),a._uU(10,"Start Address"),a.qZA(),a.TgZ(11,"ion-input",7),a.NdJ("ngModelChange",function(t){return e.trip.start_address=t})("ionChange",function(){return e.autocompleteStartAddress()}),a.qZA(),a.qZA(),a.YNc(12,l,4,1,"div",8),a.TgZ(13,"ion-item"),a.TgZ(14,"ion-label",6),a._uU(15,"End Address"),a.qZA(),a.TgZ(16,"ion-input",7),a.NdJ("ngModelChange",function(t){return e.trip.end_address=t})("ionChange",function(){return e.autocompleteEndAddress()}),a.qZA(),a.qZA(),a.YNc(17,f,4,1,"div",8),a.YNc(18,_,2,1,"p",9),a.qZA(),a.qZA(),a.TgZ(19,"ion-footer",10),a.TgZ(20,"ion-button",11),a.NdJ("click",function(){return e.create()}),a._uU(21," Add Trip "),a.YNc(22,h,1,0,"ion-spinner",12),a.qZA(),a.qZA()),2&t&&(a.xp6(11),a.Q6J("ngModel",e.trip.start_address),a.xp6(1),a.Q6J("ngIf",e.startAddressPredictions.length>0&&e.trip.start_address),a.xp6(4),a.Q6J("ngModel",e.trip.end_address),a.xp6(1),a.Q6J("ngIf",e.endAddressPredictions.length>0&&e.trip.end_address),a.xp6(1),a.Q6J("ngIf",e.trip.error),a.xp6(2),a.Q6J("disabled",e.trip.loading||!e.trip.start_address||!e.trip.end_address),a.xp6(2),a.Q6J("ngIf",e.trip.loading))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.pK,o.j9,i.JJ,i.On,r.O5,o.fr,o.YG,o.yh,r.sg,o.PQ],styles:[".signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__error[_ngcontent-%COMP%]{color:red;font-size:12px;line-height:16px;text-align:Center}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__login[_ngcontent-%COMP%]{margin-top:40px;text-align:Center}.signup-footer[_ngcontent-%COMP%]{background-color:#fff}.signup-footer[_ngcontent-%COMP%]:before{display:none}.signup-footer[_ngcontent-%COMP%]   .signup-footer__button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;margin-left:5px}"]}),t}()}],A=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),t}(),Z=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.ez,i.u5,o.Pc,A]]}),t}()}}]);