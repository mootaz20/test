import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Models/Product';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  @Output()  close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() product : any;
  @ViewChild('Edit') form : NgForm; 
  httpServices : HttpServiceService = inject(HttpServiceService);

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue({
        title : this.product.title,
        descrption : this.product.description,
        price : this.product.price,
        image : this.product.image,
        category : this.product.category
      })
    }, 0);
  }

  closeForm(){
    this.close.emit(true);
  }
  onEditClick(form: NgForm){
    this.httpServices.putProduct(this.product.id , form.value);
    this.close.emit();
  }
}
