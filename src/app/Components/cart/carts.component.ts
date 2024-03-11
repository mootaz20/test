import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  carts : any;
  httpServices : HttpServiceService = inject(HttpServiceService);
  isLoading : boolean = true; 
  @ViewChild('limit') limit : ElementRef;
  @ViewChild('start') start : ElementRef;
  @ViewChild('end') end : ElementRef;


  ngOnInit(): void {
    this.httpServices.getAllCarts()
    .subscribe({
      next: (res)=>{
        this.isLoading = false;
        this.carts = res;
      },
      error: (err)=>{
        alert('Error Occured' + err);
      }
    })
  }
  onLimitClick(){
    console.log(this.limit.nativeElement.value);
    this.httpServices.getLimit(this.limit.nativeElement.value)
    .subscribe({
      next: (data)=>{
        this.carts= data;
      },
      error: (err)=>{
        alert("Error Occurred" + err);
      }
    });
  }

  onDeleteClick(id){
    this.httpServices.deleteCart(id);
  }

  onFilterClick(){
    console.log(this.start.nativeElement.value);
    console.log(this.end.nativeElement.value);
    this.httpServices.getCartRange(this.start.nativeElement.value,this.end.nativeElement.value)
  .subscribe({
    next: (data: any)=> {
      if(data.length ==0 ){
        alert("No Data Found");
      }else{
        this.carts = data;
      }
  }})
  }




}
