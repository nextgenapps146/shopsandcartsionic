import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UtilsServiceService } from '../services/Utils/utils-service.service';
import { AuthServiceService } from '../services/Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private authServ: AuthServiceService, private util: UtilsServiceService) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    return this.authServ.checkAuth().then(user => {
      if (user) {
        return true;
      } else {
        this.util.navigate('login', true);
      }
    });
  }
}
