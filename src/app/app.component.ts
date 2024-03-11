import { Component, OnInit, inject } from '@angular/core';
import { HttpServiceService } from './Services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  httpService : HttpServiceService = inject(HttpServiceService);
  
  ngOnInit(): void {
    this.httpService.token =  localStorage.getItem('token');
  }
}
