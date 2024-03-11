import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{
  httpService : HttpServiceService = inject(HttpServiceService);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(this.httpService.token.token);
    if(req.url != 'https://fakestoreapi.com/auth/login'){
      let modified = req.clone({headers: req.headers.set('Authorization', this.httpService.token.token)});
      console.log(modified);
      return next.handle(modified);
    }
    return  next.handle(req);
  }
}
