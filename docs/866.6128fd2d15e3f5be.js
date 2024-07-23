"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[866],{1866:(g,p,e)=>{e.r(p),e.d(p,{BlankLayoutComponent:()=>f});var c=e(6814),i=e(1120),m=e(7913),t=e(4769),u=e(1166),l=e(6475),r=e(4972);const v=["navbar"];let h=(()=>{class s{constructor(a,n,o,d,_){this._WhislistService=a,this._Router=n,this._CartService=o,this._ProductsService=d,this._Renderer2=_,this.cartnumwhislist=0}onScroll(){scrollY>500?this._Renderer2.addClass(this.navelement.nativeElement,"px-5"):this._Renderer2.removeClass(this.navelement.nativeElement,"px-5")}ngOnInit(){this._CartService.cartnum.subscribe({next:a=>{console.log(a),this.cartnumber=a,this._WhislistService.cartnumber.subscribe({next:n=>{console.log(n),this.cartnumwhislist=n}})}}),this._CartService.getcard().subscribe({next:a=>{console.log(a.numOfCartItems),this.cartnumber=a.numOfCartItems}})}signout(){localStorage.removeItem("eToken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(u.p),t.Y36(i.F0),t.Y36(l.N),t.Y36(r.s),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-nav-blank"]],viewQuery:function(n,o){if(1&n&&t.Gf(v,5),2&n){let d;t.iGM(d=t.CRH())&&(o.navelement=d.first)}},hostBindings:function(n,o){1&n&&t.NdJ("scroll",function(){return o.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:46,vars:2,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],["navbar",""],[1,"container-fluid"],[1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/catagery",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0","align-items-center"],["routerLink","/whishlist",1,"nav-link","position-relative"],[1,"fa-solid","fa-heart","fa-2x","text-danger"],[1,"bg-info","badge","top-0","end-0","position-absolute"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-2x","text-main"],[1,"dropdown-menu"],["role","button","routerLink","/forgetpassword",1,"dropdown-item","text-main"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"text-main","fas","fa-cart-shopping","fa-2x"],[1,"nav-item","d-flex","gap-3","me-2"],[1,"fa-brands","fa-facebook","me-2"],[1,"fa-brands","fa-instagram","me-2"],[1,"fa-brands","fa-tiktok","me-2"],[1,"fa-brands","fa-twitter","me-2"],["role","button",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14," catagery"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"products"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"brands"),t.qZA()()(),t.TgZ(21,"ul",14)(22,"a",15),t._UZ(23,"i",16),t.TgZ(24,"span",17),t._uU(25),t.qZA()(),t.TgZ(26,"li",18)(27,"a",19),t._UZ(28,"i",20),t.qZA(),t.TgZ(29,"ul",21)(30,"li")(31,"a",22),t._uU(32,"forget password"),t.qZA()()()(),t.TgZ(33,"li",9)(34,"a",23),t._UZ(35,"i",24),t.TgZ(36,"span",17),t._uU(37),t.qZA()()(),t.TgZ(38,"li",25),t._UZ(39,"i",26)(40,"i",27)(41,"i",28)(42,"i",29),t.qZA(),t.TgZ(43,"li",9)(44,"span",30),t.NdJ("click",function(){return o.signout()}),t._uU(45,"sign out"),t.qZA()()()()()()),2&n&&(t.xp6(25),t.Oqu(o.cartnumwhislist),t.xp6(12),t.Oqu(o.cartnumber))},dependencies:[c.ez,i.rH,i.Od],styles:["nav[_ngcontent-%COMP%]{transition:padding 1.5s}"]})}return s})(),f=(()=>{class s{goup(){window.scrollTo(0,0)}static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:6,vars:0,consts:[[1,"container-fluid"],[1,"btn-up",3,"click"],[1,"fa-sharp","fa-solid","fa-arrow-up"]],template:function(n,o){1&n&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"),t.TgZ(4,"button",1),t.NdJ("click",function(){return o.goup()}),t._UZ(5,"i",2),t.qZA())},dependencies:[c.ez,i.lC,m.c,h],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.btn-up[_ngcontent-%COMP%]{position:fixed;right:15px;bottom:10px;width:40px;height:40px;z-index:99;border-radius:10px;background-color:#0aad0a;border:unset}.btn-up[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:20px}"]})}return s})()},6475:(g,p,e)=>{e.d(p,{N:()=>t});var c=e(5619),i=e(4769),m=e(9862);let t=(()=>{class u{constructor(r){this._HttpClient=r,this.cartnum=new c.X(0),this.myheader={token:localStorage.getItem("eToken")}}addtocart(r){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:r},{headers:this.myheader})}getcard(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.myheader})}removecart(r){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${r}`,{headers:this.myheader})}updatacart(r,v){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${r}`,{count:v},{headers:this.myheader})}clearall(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers:this.myheader})}static#t=this.\u0275fac=function(v){return new(v||u)(i.LFG(m.eN))};static#e=this.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},4972:(g,p,e)=>{e.d(p,{s:()=>m});var c=e(4769),i=e(9862);let m=(()=>{class t{constructor(l){this._HttpClient=l}getallproduct(l=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${l}`)}geteachproduct(l){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${l}`)}static#t=this.\u0275fac=function(r){return new(r||t)(c.LFG(i.eN))};static#e=this.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);