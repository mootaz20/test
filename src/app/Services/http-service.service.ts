import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  http: HttpClient = inject(HttpClient);
  products: Product[] = [];
  token: any;
  route : Router = inject(Router);

  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getCategories(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductsByCategory(selectedCategory: string): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/category/' + selectedCategory)
  }
  getProduct(id: number): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
  createProduct(data) {
    this.http.post('https://fakestoreapi.com/products', data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Product Created Successfully!');
        },
        error: (e) => console.error(`Error creating product ${e}`)
      })
  }

  deleteProduct(id) {
    this.http.delete('https://fakestoreapi.com/products/' + id)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert("Delete successful!");
        },
        error: (e) => {
          console.error(`Error creating product ${e}`);
          alert(`Failed to Delete!`);
        }
      })
  }

  login(data) {
    this.http.post('https://fakestoreapi.com/auth/login', data)
      .subscribe({
        next: (res) => {
          this.handleToken(res);
        },
        error: (err) => {
          console.log(err);
          alert(`Invalid username or password`);
        }
      });
  }
  
  private handleToken(res){
    this.token = res.token;
    console.log(this.token);
    localStorage.setItem('token', this.token);
    alert('Login Successful! ');
    this.route.navigate(['products']);
  }

  putProduct(id, data) {
    // console.log(id);
    this.http.put('https://fakestoreapi.com/products/' + id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert(' Update Successful');
        },
        error: (err) => {
          console.log(err);
          alert("Update Failed");
        }
      })
  }

  getAllCarts() {
    return this.http.get('https://fakestoreapi.com/carts');
  }

  deleteCart(id) {
    this.http.delete('https://fakestoreapi.com/carts/' + id)
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            alert('Delete Cart Successfully');
          },
          error: (err) => {
            console.log(err);
            alert('Failed to Delete the cart');
          }
        }
      );
  }

  getLimit(number): Observable<any> {
    return this.http.get('https://fakestoreapi.com/carts', { params: { limit: number } });
  }

  getCart(id: number): Observable<any> {
    return this.http.get('https://fakestoreapi.com/carts/' + id);
  }

  getCartRange(start, end) {
    return this.http.get('https://fakestoreapi.com/carts', { params: { startdate: start, enddate: end } });
  }

  addCart(data) {
    this.http.post('https://fakestoreapi.com/carts', data)
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            alert('Add To Cart Successfully');
          },
          error: (err) => {
            console.log(err);
            alert("Failed to Add Cart");
          }
        }
      )
  }


  getAllUsers(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/users');
  }

  deleteUser(id: number) {
    this.http.delete('https://fakestoreapi.com/users/' + id).subscribe(
      {
        next: (data) => {
          console.log(data);
          alert("Deleted the user successfully!");
        },
        error: (err) => {
          alert("An error occured.");
        }
      }
    );
  }


  sortUser(data : string): Observable<any>{
   return this.http.get('https://fakestoreapi.com/users',{params : {sort : data}});
  }

  addUser(data){
    this.http.post('https://fakestoreapi.com/users',data)
    .subscribe({
      next: (data)=>{
        console.log(data);
        alert(' The User has been added')
      },
      error: (err)=>{
        alert(' Error in adding a new user!' + err);
      }
    })
  }


  filterProductByLimit(id: number): Observable<any>{
   return this.http.get('https://fakestoreapi.com/products',{params:{limit:id}})
  }

  sortProducts(data: string): Observable<any>{
    return this.http.get('https://fakestoreapi.com/products',{params:{sort:data}});
  }

}
