"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[683],{683:(u,i,e)=>{e.r(i),e.d(i,{BranddetailsComponent:()=>c});var r=e(6814),t=e(4769),o=e(1120),l=e(7224);let c=(()=>{class n{constructor(a,s){this._ActivatedRoute=a,this._BrandService=s,this.branddetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{console.log(a.get("id")),this.prodid=a.get("id")}}),this._BrandService.geteachbrand(this.prodid).subscribe({next:a=>{console.log(a),this.branddetails=a.data}})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(o.gz),t.Y36(l.c))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-branddetails"]],standalone:!0,features:[t.jDz],decls:9,vars:4,consts:[[1,"mx-auto","bg-main-light","w-75"],[1,"row","g-5"],[1,"col-md-6"],[1,"w-100",3,"src","alt"],[1,"text-muted",2,"font-size","22px"]],template:function(s,d){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",2)(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"p",4),t._uU(8),t.qZA()()()()),2&s&&(t.xp6(3),t.Q6J("src",d.branddetails.image,t.LSH)("alt",d.branddetails.name),t.xp6(3),t.Oqu(d.branddetails.name),t.xp6(2),t.Oqu(d.branddetails.updatedAt))},dependencies:[r.ez]})}return n})()}}]);