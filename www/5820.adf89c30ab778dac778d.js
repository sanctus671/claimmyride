(self.webpackChunkclaimmyride=self.webpackChunkclaimmyride||[]).push([[5820],{5820:function(n,e,t){"use strict";t.r(e),t.d(e,{SettingsPageModule:function(){return f}});var i=t(1116),o=t(1462),r=t(8809),a=t(578),s=t(5803),c=t(303),l=t(9899),u=function(){return["/manage-drivers"]},h=function(){return["/manage-vehicles"]},g=function(){return["/manage-trip-categories"]},p=function(){return["/tax-settings"]},d=[{path:"",component:function(){function n(n,e,t,i,o,r){var a=this;this.plt=n,this.authenticationService=e,this.alertCtrl=t,this.iab=i,this.modalController=o,this.loadingController=r,this.user={},this.authenticationService.getUserData().subscribe(function(n){console.log(n),a.user=n})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){},n.prototype.syncXero=function(){this.loadingController.create({message:"Connecting to Xero. Please wait...",duration:2e4}).then(function(n){n.present()})},n.prototype.openRate=function(){this.plt.is("ios")?this.iab.create("https://itunes.apple.com/","_system"):this.iab.create("https://play.google.com/store/apps/details?id=com.claimmyride.app","_system")},n.prototype.openFollow=function(){this.iab.create("https://www.facebook.com/","_system")},n.prototype.openEmail=function(){this.iab.create("mailto:craig@gmail.com","_system")},n.prototype.openChangeUnits=function(){var n=this;this.alertCtrl.create({header:"Change Units",inputs:[{name:"units",type:"radio",label:"Kilometer",value:"km",checked:!this.user.units||"km"===this.user.units},{name:"units",type:"radio",label:"Miles",value:"miles",checked:!(!this.user.units||"miles"!==this.user.units)}],buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Change",handler:function(e){e&&(n.user.units=e,n.authenticationService.updateUser({units:e}).then(function(){}))}}]}).then(function(n){n.present()})},n.prototype.openChangeEmail=function(){var n=this;this.alertCtrl.create({header:"Change Email",inputs:[{name:"email",placeholder:"Email",type:"text",value:this.user.email}],buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Change",handler:function(e){e.email&&n.authenticationService.changeEmail(n.user.email).then(function(){n.alertCtrl.create({header:"Success",message:"Your email has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then(function(n){n.present()})}).catch(function(){n.alertCtrl.create({header:"Error",message:"There was an error while changing your email.",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(e){setTimeout(function(){n.openChangeEmail()},200)}}]}).then(function(n){n.present()})})}}]}).then(function(n){n.present()})},n.prototype.openChangePassword=function(){var n=this;this.alertCtrl.create({header:"Change Password",inputs:[{name:"password",placeholder:"Password",type:"password"},{name:"confirmPassword",placeholder:"Confirm Password",type:"password"}],buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Change",handler:function(e){e.password&&e.confirmPassword&&e.password===e.confirmPassword?n.authenticationService.changePassword(n.user.email,e.password,e.confirmPassword).then(function(){n.alertCtrl.create({header:"Success",message:"Your password has been updated",buttons:[{text:"Dismiss",role:"cancel",handler:function(n){}}]}).then(function(n){n.present()})}).catch(function(){n.alertCtrl.create({header:"Error",message:"There was an error while changing your password.",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(e){setTimeout(function(){n.openChangePassword()},200)}}]}).then(function(n){n.present()})}):n.alertCtrl.create({header:"Error",message:"Passwords do not match",buttons:[{text:"Cancel",role:"cancel",handler:function(n){}},{text:"Try Again",handler:function(e){setTimeout(function(){n.openChangePassword()},200)}}]}).then(function(n){n.present()})}}]}).then(function(n){n.present()})},n.prototype.logout=function(){this.authenticationService.logout()},n.\u0275fac=function(e){return new(e||n)(s.Y36(r.t4),s.Y36(c.$),s.Y36(r.Br),s.Y36(l.i),s.Y36(r.IN),s.Y36(r.HT))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-settings"]],decls:56,vars:8,consts:[[1,"settings-header"],["color","light"],["color","primary"],[1,"settings"],["routerDirection","forward","mode","md","detail","false",3,"routerLink"],["name","chevron-forward-outline","slot","end","color","primary"],[3,"click"],[1,"settings__header"]],template:function(n,e){1&n&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar",1),s.TgZ(2,"ion-title",2),s._uU(3,"Settings"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"ion-content",3),s.TgZ(5,"ion-list"),s.TgZ(6,"ion-list-header"),s._uU(7,"Tracking"),s.qZA(),s.TgZ(8,"ion-item",4),s.TgZ(9,"ion-label"),s._uU(10,"Manage Drivers"),s.qZA(),s._UZ(11,"ion-icon",5),s.qZA(),s.TgZ(12,"ion-item",4),s.TgZ(13,"ion-label"),s._uU(14,"Manage Vehicles"),s.qZA(),s._UZ(15,"ion-icon",5),s.qZA(),s.TgZ(16,"ion-item",4),s.TgZ(17,"ion-label"),s._uU(18,"Manage Trip Categories"),s.qZA(),s._UZ(19,"ion-icon",5),s.qZA(),s.TgZ(20,"ion-item",6),s.NdJ("click",function(){return e.openChangeUnits()}),s.TgZ(21,"ion-label"),s._uU(22,"Change Units"),s.qZA(),s._UZ(23,"ion-icon",5),s.qZA(),s.TgZ(24,"ion-item",4),s.TgZ(25,"ion-label"),s._uU(26,"Tax Settings"),s.qZA(),s._UZ(27,"ion-icon",5),s.qZA(),s.TgZ(28,"ion-item",6),s.NdJ("click",function(){return e.syncXero()}),s.TgZ(29,"ion-label"),s._uU(30,"Sync with Xero"),s.qZA(),s._UZ(31,"ion-icon",5),s.qZA(),s.TgZ(32,"ion-list-header",7),s._uU(33,"Account"),s.qZA(),s.TgZ(34,"ion-item",6),s.NdJ("click",function(){return e.openChangeEmail()}),s.TgZ(35,"ion-label"),s._uU(36,"Change Email"),s.qZA(),s._UZ(37,"ion-icon",5),s.qZA(),s.TgZ(38,"ion-item",6),s.NdJ("click",function(){return e.openChangePassword()}),s.TgZ(39,"ion-label"),s._uU(40,"Change Password"),s.qZA(),s._UZ(41,"ion-icon",5),s.qZA(),s.TgZ(42,"ion-item",6),s.NdJ("click",function(){return e.logout()}),s._uU(43," Logout "),s._UZ(44,"ion-icon",5),s.qZA(),s.TgZ(45,"ion-list-header",7),s._uU(46,"Support"),s.qZA(),s.TgZ(47,"ion-item",6),s.NdJ("click",function(){return e.openRate()}),s._uU(48," Rate The App "),s._UZ(49,"ion-icon",5),s.qZA(),s.TgZ(50,"ion-item",6),s.NdJ("click",function(){return e.openFollow()}),s._uU(51," Follow Us "),s._UZ(52,"ion-icon",5),s.qZA(),s.TgZ(53,"ion-item",6),s.NdJ("click",function(){return e.openEmail()}),s._uU(54," Contact Support "),s._UZ(55,"ion-icon",5),s.qZA(),s.qZA(),s.qZA()),2&n&&(s.xp6(8),s.Q6J("routerLink",s.DdM(4,u)),s.xp6(4),s.Q6J("routerLink",s.DdM(5,h)),s.xp6(4),s.Q6J("routerLink",s.DdM(6,g)),s.xp6(8),s.Q6J("routerLink",s.DdM(7,p)))},directives:[r.Gu,r.sr,r.wd,r.W2,r.q_,r.yh,r.Ie,r.YI,a.rH,r.Q$,r.gu],styles:[".settings-header[_ngcontent-%COMP%]{background-color:#f6f7eb}.settings[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:#f6f7eb}.settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:#f6f7eb}.settings[_ngcontent-%COMP%]   ion-list.ios[_ngcontent-%COMP%]{margin-top:15px}.settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{--background:#f6f7eb;color:#23232366}.settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header.ios[_ngcontent-%COMP%]{font-size:14px;font-weight:400;min-height:45px;line-height:45px}.settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .settings__header[_ngcontent-%COMP%]{margin-top:10px}"]}),n}()}],m=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),n}(),f=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[i.ez,o.u5,r.Pc,m]]}),n}()}}]);