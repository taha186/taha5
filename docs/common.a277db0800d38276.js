"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[592],{7913:(_,i,r)=>{r.d(i,{c:()=>s});var o=r(6814),t=r(4769);let s=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:13,vars:0,consts:[[1,"taha","bg-main-light"],[1,"container"],[1,"text-muted"],[1,"div","d-flex","gap-2"],["type","email ","placeholder","email",1,"form-control"],[1,"btn-main","flex-shrink-0"],[1,"h6","text"]],template:function(a,u){1&a&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"get the fresh app"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,"we will send you an email"),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"input",4),t.TgZ(8,"button",5),t._uU(9," share app link"),t.qZA()(),t._UZ(10,"hr"),t.TgZ(11,"h5",6),t._uU(12,"$copy:taha ahmed2024 ALL RIGHT reserved"),t.qZA()()())},dependencies:[o.ez],styles:["h5[_ngcontent-%COMP%]{text-align:center;color:#0000007d;font-size:14px;font-weight:400}[_nghost-%COMP%]{margin-top:auto}"]})}return n})()},8129:(_,i,r)=>{r.d(i,{r:()=>t});var o=r(4769);let t=(()=>{class s{transform(c,e){return c.split(" ").slice(0,e).join()}static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275pipe=o.Yjl({name:"cuttext",type:s,pure:!0,standalone:!0})}return s})()},530:(_,i,r)=>{r.d(i,{C:()=>t});var o=r(4769);let t=(()=>{class s{transform(c,e){return c.filter(a=>a.title.toLowerCase().includes(e.toLowerCase()))}static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275pipe=o.Yjl({name:"search",type:s,pure:!0,standalone:!0})}return s})()},304:(_,i,r)=>{r.d(i,{e:()=>s});var o=r(4769),t=r(9862);let s=(()=>{class n{constructor(e){this._HttpClient=e,this.mytoken=localStorage.getItem("eToken")}regisiter(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",e)}signinlogin(e){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",e)}static#t=this.\u0275fac=function(a){return new(a||n)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},7224:(_,i,r)=>{r.d(i,{c:()=>s});var o=r(4769),t=r(9862);let s=(()=>{class n{constructor(e){this._HttpClient=e}getallbrands(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands?page=${e}`)}geteachbrand(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(a){return new(a||n)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},4320:(_,i,r)=>{r.d(i,{w:()=>s});var o=r(4769),t=r(9862);let s=(()=>{class n{constructor(e){this._HttpClient=e}getallgategary(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getdetailscategary(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}static#t=this.\u0275fac=function(a){return new(a||n)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},1166:(_,i,r)=>{r.d(i,{p:()=>n});var o=r(5619),t=r(4769),s=r(9862);let n=(()=>{class c{constructor(a){this._HttpClient=a,this.cartnumber=new o.X(0),this.myheader={token:localStorage.getItem("eToken")}}addtowhislist(a){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:a},{headers:this.myheader})}getwhislist(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:this.myheader})}removewhislist(a){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${a}`,{headers:this.myheader})}static#t=this.\u0275fac=function(u){return new(u||c)(t.LFG(s.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);