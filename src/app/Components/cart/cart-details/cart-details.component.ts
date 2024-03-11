import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  activateRoute : ActivatedRoute = inject(ActivatedRoute);
  selectedCart : number;
  httpServices : HttpServiceService = inject(HttpServiceService);
  cart : any;
  isLoading : boolean = true;


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params)=>{
      this.selectedCart = +params.get('id');
    })
    this.httpServices.getCart(this.selectedCart).subscribe(
      {
        next:(value) =>{
          console.log("Value is " , value);
          this.isLoading=false;
          this.cart=value;
      },
      error: (err)=>{
        alert(' Error occured while fetching data' + err);
      }
    }
    );

  }

}
