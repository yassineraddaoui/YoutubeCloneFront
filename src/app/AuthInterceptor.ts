import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Cookie': 'session=' + "AC5A6702C4FA29691E29A3651385FA90",
        }
      });
    return next.handle(req);
  }
}
