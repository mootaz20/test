import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  categories = [];
  isLoading : boolean = true;
  httpServices : HttpServiceService = inject(HttpServiceService);
  showCreate : boolean = false;
  @ViewChild('sort') sort : ElementRef;
  @ViewChild('filter') filter : ElementRef;


  ngOnInit(): void {
    this.httpServices.getCategories().subscribe({
      next: (data)=>{
        this.categories = data;
      }
    })
    this.httpServices.getAllProducts()
    .subscribe({
      next: (data : Product[])=>{
        this.isLoading = false;
        this.products = data;
      }
    });
  }

  OnFilterClick(category : string){
    this.httpServices.getProductsByCategory(category)
    .subscribe({
      next: (data : Product[])=>{
        this.products = data;
      }
    });
  }
  onAllButton(){
    this.httpServices.getAllProducts()
    .subscribe({
      next: (data : Product[])=>{
        this.isLoading = false;
        this.products = data;
      }
    });
  }

  onCreateClick(){
    this.showCreate = true;
  }
  closeCreate(){
    this.showCreate = false;
  }

  onFilterButtonClick(){
    this.httpServices.filterProductByLimit(this.filter.nativeElement.value)
    .subscribe({
      next: (data)=>{
        this.products = data;
      },
      error: (err)=>{
        alert(' Error '+err);
      }
    })
  }
  onSortClick(){
    this.httpServices.sortProducts(this.sort.nativeElement.value)
    .subscribe(
      {
        next: (data)=>{
          this.products = data;
        },
        error: (err)=>{
          alert(' Error in sorting'+err);
        }
      }
    )
  }


}
