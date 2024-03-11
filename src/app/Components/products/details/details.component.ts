import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  httpService :HttpServiceService = inject(HttpServiceService);
  selectedProduct : number;
  product: any;
  showEdit : boolean = false;
  selectedEdit : Product;
 

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) =>{
      this.selectedProduct = +params.get('id');  
    });
    this.httpService.getProduct(this.selectedProduct)
    .subscribe({
      next: (data)=>{
        this.product = data;
        console.log(this.product);
      }
    })
  }

  onDeleteClick(id: number){
    if(confirm("Are you sure to delete the Product ?")){
      this.httpService.deleteProduct(id);
  }
}

onEditClick(product: Product){
  this.showEdit = true;
  this.selectedEdit = product; 
}
closeEdit(){
  this.showEdit = false;
}
 



}
