import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams} from "@angular/common/http";
import {TokenService} from "./token.service";


@Injectable()

export class AuthInterceptorService implements HttpInterceptor{
  constructor(private tokenService: TokenService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.tokenService.getToken();
    if(token){
      const modifiedReq = req.clone({params: new HttpParams().set('token', token )});
      return next.handle(modifiedReq)
    }
    return next.handle(req)
  }
}
