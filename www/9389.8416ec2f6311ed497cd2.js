(self.webpackChunkclaimmyride=self.webpackChunkclaimmyride||[]).push([[9389],{9389:function(n,r,e){"use strict";e.r(r),e.d(r,{AddDriverPageModule:function(){return f}});var t=e(1116),i=e(1462),o=e(8809),c=e(578),a=e(5803),s=e(2827);function u(n,r){if(1&n&&(a.TgZ(0,"p",12),a._uU(1),a.qZA()),2&n){var e=a.oxw();a.xp6(1),a.Oqu(e.driver.error)}}function g(n,r){1&n&&a._UZ(0,"ion-spinner")}var p=[{path:"",component:function(){function n(n,r,e){this.driverService=n,this.navCtrl=r,this.alertCtrl=e,this.driver={}}return n.prototype.ngOnInit=function(){},n.prototype.create=function(){var n=this;this.driver.loading=!0,this.driverService.createDriver(this.driver).then(function(){n.driver.loading=!1,n.driverService.setDriversUpdated(),n.navCtrl.back()}).catch(function(){n.driver.loading=!1,n.alertCtrl.create({header:"Error",message:"There was an error while creating your driver. Please try again.",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then(function(n){n.present()})})},n.\u0275fac=function(r){return new(r||n)(a.Y36(s.F),a.Y36(o.SH),a.Y36(o.Br))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-add-driver"]],decls:17,vars:4,consts:[["color","light"],["slot","start"],["defaultHref","/tabs/track","color","primary"],["color","primary"],[1,"signup"],[1,"signup__form"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange"],["class","signup__form__error",4,"ngIf"],[1,"signup-footer"],["color","primary","expand","full","shape","round",1,"signup-footer__button",3,"disabled","click"],[4,"ngIf"],[1,"signup__form__error"]],template:function(n,r){1&n&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-back-button",2),a.qZA(),a.TgZ(4,"ion-title",3),a._uU(5,"Add Driver"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content",4),a.TgZ(7,"ion-list",5),a.TgZ(8,"ion-item"),a.TgZ(9,"ion-label",6),a._uU(10,"Name"),a.qZA(),a.TgZ(11,"ion-input",7),a.NdJ("ngModelChange",function(n){return r.driver.first_name=n}),a.qZA(),a.qZA(),a.YNc(12,u,2,1,"p",8),a.qZA(),a.qZA(),a.TgZ(13,"ion-footer",9),a.TgZ(14,"ion-button",10),a.NdJ("click",function(){return r.create()}),a._uU(15," Add Driver "),a.YNc(16,g,1,0,"ion-spinner",11),a.qZA(),a.qZA()),2&n&&(a.xp6(11),a.Q6J("ngModel",r.driver.first_name),a.xp6(1),a.Q6J("ngIf",r.driver.error),a.xp6(2),a.Q6J("disabled",r.driver.loading),a.xp6(2),a.Q6J("ngIf",r.driver.loading))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.q_,o.Ie,o.Q$,o.pK,o.j9,i.JJ,i.On,t.O5,o.fr,o.YG,o.PQ],styles:[".signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__error[_ngcontent-%COMP%]{color:red;font-size:12px;line-height:16px;text-align:Center}.signup[_ngcontent-%COMP%]   .signup__form[_ngcontent-%COMP%]   .signup__form__login[_ngcontent-%COMP%]{margin-top:40px;text-align:Center}.signup-footer[_ngcontent-%COMP%]{background-color:#fff}.signup-footer[_ngcontent-%COMP%]:before{display:none}.signup-footer[_ngcontent-%COMP%]   .signup-footer__button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px;margin-left:5px}"]}),n}()}],d=function(){function n(){}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),n}(),f=function(){function n(){}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[t.ez,i.u5,o.Pc,d]]}),n}()}}]);