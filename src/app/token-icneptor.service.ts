import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { UserService } from './user.service';
@Injectable()
export class TokenIcneptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  
  intercept(req, next) {
	  let userService = this.injector.get(UserService)
	  let tokenizedReq = req.clone({
		  setHeaders:{
			  Authorization: `Token ${userService.getToken()}`
		  }
	  })
	  return next.handle(tokenizedReq)
  }
}
