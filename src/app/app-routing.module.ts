import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { CartsComponent } from './Components/cart/carts.component';
import { DetailsComponent } from './Components/products/details/details.component';
import { CreateCartComponent } from './Components/cart/create-cart/create-cart.component';
import { CartDetailsComponent } from './Components/cart/cart-details/cart-details.component';
import { UsersComponent } from './Components/users/users.component';
import { CreateUserComponent } from './Components/users/create-user/create-user.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'products/detail/:id' , component: DetailsComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'carts' , component: CartsComponent},
  {path: 'users' , component: UsersComponent},
  {path: 'users' , children:[
    {path: 'createUser' , component: CreateUserComponent},
  ]},
  {path: 'carts' , children: [
    { path: 'create', component: CreateCartComponent}, 
    { path: 'detail/:id', component: CartDetailsComponent}, 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
