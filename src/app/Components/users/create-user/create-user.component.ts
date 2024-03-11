import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  httpService : HttpServiceService = inject(HttpServiceService);

  fb : FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        zipcode: ['', Validators.required],
        geolocation: this.fb.group({
          lat: [''],
          long: ['']
        })
      }),
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form values:', this.userForm.value);
      this.httpService.addUser(this.userForm.value);
      this.userForm.reset();
    } 
  }
}
