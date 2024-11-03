import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authgardGuard } from './core/gard/authgard.guard';

const routes: Routes = [
  {path:'',
    
    canActivate:[authgardGuard],loadComponent:()=>import('./components/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent ),
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'catagery',loadComponent:()=>import('./components/categary/categary.component').then((m)=>m.CategaryComponent)},
      {path:'brands',loadComponent:()=>import ('./components/brands/brands.component').then((m)=>m.BrandsComponent)},
      {path:'cart',loadComponent:()=>import ('./components/cart/cart.component').then((m)=>m.CartComponent)},
      {path:'products',loadComponent:()=>import ('./components/products/products.component').then((m)=>m.ProductsComponent)},
      {path:'details/:id',loadComponent:()=>import('./components/cartdetails/productdetails/productdetails.component').then((m)=>m.ProductdetailsComponent)},
     {path:'checkout/:id',loadComponent:()=>import('./components/checkout/checkout/checkout.component').then((m)=>m.CheckoutComponent)},
{path:'forgetpassword',loadComponent:()=>import('./components/forget/forgetpass/forgetpass.component').then((m)=>m.ForgetpassComponent)},
{path:'whishlist',loadComponent:()=>import('./components/whislist/whislist/whislist.component').then((m)=>m.WhislistComponent)},
{path:'categarydetail/:_id',loadComponent:()=>import('./components/gategartdetails/gataegarydetail/gataegarydetail.component').then((m)=>m.GataegarydetailComponent)},
{path:'branddetails/:id',loadComponent:()=>import('./components/brandsdetais/branddetails/branddetails.component').then((m)=>m.BranddetailsComponent)},
      

        {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent)},
      
    ]
  },

  {path:'',loadComponent:()=>import('./components/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)},
    {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)}
  ]
  },
  {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent)},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
