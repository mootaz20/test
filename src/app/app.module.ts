import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartsComponent } from './Components/cart/carts.component';
import { DetailsComponent } from './Components/products/details/details.component';
import { CreateProductComponent } from './Components/products/create-product/create-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './Components/products/details/edit/edit.component';
import { CartDetailsComponent } from './Components/cart/cart-details/cart-details.component';
import { CreateCartComponent } from './Components/cart/create-cart/create-cart.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { HttpinterceptorService } from './Services/httpinterceptor.service';
import { UsersComponent } from './Components/users/users.component';
import { CreateUserComponent } from './Components/users/create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartsComponent,
    DetailsComponent,
    CreateProductComponent,
    EditComponent,
    CartDetailsComponent,
    CreateCartComponent,
    LoaderComponent,
    UsersComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttpinterceptorService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
