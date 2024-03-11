import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  @Output() close : EventEmitter<boolean> = new EventEmitter<boolean>();
  httpServices : HttpServiceService = inject(HttpServiceService);

  closeForm(){
    this.close.emit(true);
  }
  onCreateClick(form: NgForm){
    console.log(form.value);
    this.httpServices.createProduct(form.value);
    this.close.emit(true);
  }
}
