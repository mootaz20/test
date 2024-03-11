import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  httpServices: HttpServiceService = inject(HttpServiceService);

  ngOnInit(): void {
    alert('Please login username = johnd and password = m38rmF$');
  }

  onFormSubmit(form: NgForm){
    console.log(form.value);
    this.httpServices.login(form.value);
    form.reset();
  }
}
