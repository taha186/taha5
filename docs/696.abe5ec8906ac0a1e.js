"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[696],{6696:(E,d,s)=>{s.r(d),s.d(d,{ProductdetailsComponent:()=>v});var a=s(6814),c=s(756),t=s(4769),u=s(6475),_=s(1120),p=s(4972),g=s(2425);function m(i,f){if(1&i&&t._UZ(0,"img",13),2&i){const o=t.oxw().$implicit,r=t.oxw();t.Q6J("src",o,t.LSH)("title",r.productdetails.title)}}function h(i,f){1&i&&(t.ynx(0),t.YNc(1,m,1,2,"ng-template",12),t.BQk())}let v=(()=>{class i{constructor(o,r,e,n,l){this._Renderer2=o,this._CartService=r,this._ActivatedRoute=e,this._ProductsService=n,this._ToastrService=l,this.productdetails={},this.detailsoptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:o=>{console.log(o.get("id")),this.prodid=o.get("id")}}),this._ProductsService.geteachproduct(this.prodid).subscribe({next:o=>{console.log(o.data),this.productdetails=o.data},error:o=>{console.log(o.error.message)}})}addtocard(o,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.addtocart(o).subscribe({next:e=>{console.log("details",e),this._ToastrService.success(e.message),this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartnum.next(e.numOfCartItems)},error:e=>{console.log(e.error.message),this._Renderer2.removeAttribute(r,"disabled")}})}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(t.Qsj),t.Y36(u.N),t.Y36(_.gz),t.Y36(p.s),t.Y36(g._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-productdetails"]],standalone:!0,features:[t.jDz],decls:22,vars:10,consts:[[1,"row","align-items-center","g-4","mx-auto","rounded","shadow","w-75"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"btn-main","w-100",3,"click"],["msgbtn",""],["carouselSlide",""],["height","400",1,"w-100",3,"src","title"]],template:function(r,e){if(1&r){const n=t.EpF();t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"owl-carousel-o",2),t.YNc(4,h,2,0,"ng-container",3),t.qZA()(),t.TgZ(5,"div",4)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"p",5),t._uU(9),t.qZA(),t.TgZ(10,"h3",6),t._uU(11),t.qZA(),t.TgZ(12,"div",7)(13,"p",8),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"h2",6),t._UZ(17,"i",9),t._uU(18),t.qZA()(),t.TgZ(19,"button",10,11),t.NdJ("click",function(){t.CHM(n);const P=t.MAs(20);return t.KtG(e.addtocard(e.productdetails._id,P))}),t._uU(21,"+ addto card"),t.qZA()()()()}2&r&&(t.xp6(3),t.Q6J("options",e.detailsoptions),t.xp6(1),t.Q6J("ngForOf",e.productdetails.images),t.xp6(3),t.Oqu(e.productdetails.title),t.xp6(2),t.Oqu(e.productdetails.description),t.xp6(2),t.hij(" ",e.productdetails.category.name," "),t.xp6(3),t.Oqu(t.xi3(15,7,e.productdetails.price,"EGP ")),t.xp6(4),t.hij(" ",e.productdetails.ratingsAverage," "))},dependencies:[a.ez,a.sg,a.H9,c.bB,c.Fy,c.Mp],styles:["button[_ngcontent-%COMP%]{background-color:var(--main-color);padding:7px 20px;border:1px solid #ccc;border-radius:5px;color:#fff;cursor:pointer;transition:background-color .5s}"]})}return i})()}}]);