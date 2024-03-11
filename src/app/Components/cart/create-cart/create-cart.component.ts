import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  formData : any;
  reactiveForm : FormGroup;
  formBuilder : FormBuilder = inject(FormBuilder);
  httpService : HttpServiceService = inject(HttpServiceService);

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      userId: [null, Validators.required],
      date: [null, Validators.required],
      products: this.formBuilder.array([
        this.createProductFormGroup({ productId: null, quantity: null }),
        this.createProductFormGroup({ productId: null, quantity: null })
      ])
    });
  }
  createProductFormGroup(productData: { productId: number, quantity: number }): FormGroup {
    return this.formBuilder.group({
      productId: [productData.productId, Validators.required],
      quantity: [productData.quantity, Validators.required]
    });
  }
  OnFormSubmitted(){
    this.formData = this.reactiveForm.value;
    this.httpService.addCart(this.formData);
    this.reactiveForm.reset({
      userId: null,
      date: null,
      products: [
        { productId: null, quantity: null },
        { productId: null, quantity: null }
      ]
    });
  }
 

}
