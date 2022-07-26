(self.webpackChunkclaimmyride=self.webpackChunkclaimmyride||[]).push([[9006],{9006:function(e,t,n){"use strict";n.r(t),n.d(t,{TaxSettingsPageModule:function(){return d}});var i=n(1116),o=n(1462),r=n(8809),a=n(578),u=n(5803),s=n(303),c=n(6282),l=[{path:"",component:function(){function e(e,t){var n=this;this.authenticationService=e,this.vehicleService=t,this.tax={tier_one_petrol:.83,tier_one_hybrid:.83,tier_one_electric:.83,tier_two_petrol:.31,tier_two_hybrid:.18,tier_two_electric:.1},this.vehicleService.getTaxRates().then(function(e){n.tax=e,n.user.tax&&(n.tax=JSON.parse(n.user.tax))}),this.user={},this.authenticationService.retreiveUserData().then(function(e){n.user=e,n.user.tax&&(n.tax=JSON.parse(n.user.tax))})}return e.prototype.ngOnInit=function(){},e.prototype.updateTax=function(){this.authenticationService.updateUser({tax:JSON.stringify(this.tax)}).then(function(){})},e.\u0275fac=function(t){return new(t||e)(u.Y36(s.$),u.Y36(c.f))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-tax-settings"]],decls:48,vars:8,consts:[[1,"manage-drivers-header"],["color","light"],["slot","start"],["defaultHref","/settings","color","primary"],["color","primary"],[1,"tax-settings"],[1,"tax-settings__sub-description"],["position","floating"],["type","number","debounce","700",3,"ngModel","ngModelChange","ionChange"],[1,"tax-settings__header"]],template:function(e,t){1&e&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar",1),u.TgZ(2,"ion-buttons",2),u._UZ(3,"ion-back-button",3),u.qZA(),u.TgZ(4,"ion-title",4),u._uU(5,"KM Expense Claim Rates"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",5),u.TgZ(7,"p"),u._uU(8,"When using the kilometre rate method, you don\u2019t need to consider GST on your vehicle expense or allow for depreciation as that is included in the rates. And if you decide to use this claim method you must use it for the entire time that you own the vehicle. "),u._UZ(9,"br"),u._UZ(10,"br"),u._uU(11,"The default values are the expense rates per kilometre for the current IRD tax year (New Zealand). These will be automatically updated if IRD issue new rates. "),u._UZ(12,"br"),u._UZ(13,"br"),u._uU(14,"You can manually update these rates if required. "),u.qZA(),u.TgZ(15,"ion-list"),u.TgZ(16,"ion-list-header"),u._uU(17,"Tier One Rate"),u.qZA(),u.TgZ(18,"p",6),u._uU(19),u.qZA(),u.TgZ(20,"ion-item"),u.TgZ(21,"ion-label",7),u._uU(22,"Petrol/diesel tax expense"),u.qZA(),u.TgZ(23,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_one_petrol=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.TgZ(24,"ion-item"),u.TgZ(25,"ion-label",7),u._uU(26,"Petrol Hybrid tax expense"),u.qZA(),u.TgZ(27,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_one_hybrid=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.TgZ(28,"ion-item"),u.TgZ(29,"ion-label",7),u._uU(30,"Electric tax expense"),u.qZA(),u.TgZ(31,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_one_electric=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.TgZ(32,"ion-list-header",9),u._uU(33,"Tier Two Rate"),u.qZA(),u.TgZ(34,"p",6),u._uU(35),u.qZA(),u.TgZ(36,"ion-item"),u.TgZ(37,"ion-label",7),u._uU(38,"Petrol/diesel tax expense"),u.qZA(),u.TgZ(39,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_two_petrol=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.TgZ(40,"ion-item"),u.TgZ(41,"ion-label",7),u._uU(42,"Petrol Hybrid tax expense"),u.qZA(),u.TgZ(43,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_two_hybrid=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.TgZ(44,"ion-item"),u.TgZ(45,"ion-label",7),u._uU(46,"Electric tax expense"),u.qZA(),u.TgZ(47,"ion-input",8),u.NdJ("ngModelChange",function(e){return t.tax.tier_two_electric=e})("ionChange",function(){return t.updateTax()}),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(19),u.hij("The Tier One Rate is a combination of your vehicle's fixed and running costs. Use the Tier One Rate for the business portion of the first 14,000 ",t.user.units&&"km"!==t.user.units?"miles":"kilometres"," traveled by the vehicle in a year. This includes private use travel."),u.xp6(4),u.Q6J("ngModel",t.tax.tier_one_petrol),u.xp6(4),u.Q6J("ngModel",t.tax.tier_one_hybrid),u.xp6(4),u.Q6J("ngModel",t.tax.tier_one_electric),u.xp6(4),u.hij("The Tier Two Rate is for running costs only. Use the Tier Two Rate for the business portion of any travel over 14,000 ",t.user.units&&"km"!==t.user.units?"miles":"kilometres"," in a year. "),u.xp6(4),u.Q6J("ngModel",t.tax.tier_two_petrol),u.xp6(4),u.Q6J("ngModel",t.tax.tier_two_hybrid),u.xp6(4),u.Q6J("ngModel",t.tax.tier_two_electric))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.q_,r.yh,r.Ie,r.Q$,r.pK,r.as,o.JJ,o.On],styles:[".tax-settings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}.tax-settings[_ngcontent-%COMP%]   .tax-settings__sub-description[_ngcontent-%COMP%]{opacity:.5;margin-top:0}.tax-settings[_ngcontent-%COMP%]   .tax-settings__header[_ngcontent-%COMP%]{margin-top:20px}"]}),e}()}],g=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),e}(),d=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,o.u5,r.Pc,g]]}),e}()}}]);