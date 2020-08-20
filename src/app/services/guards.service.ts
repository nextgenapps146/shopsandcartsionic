import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UtilsService } from './utils.service';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class GuardsService implements CanActivate {

  constructor(private authService: AuthServiceService, private util: UtilsService) { }

  canActivate(route: ActivatedRouteSnapshot): any {
    if (this.authService.user) {
        return true;
    } else {
        this.util.navigate('login', true);
    }
    //     return this.authServ.checkAuth().then(user => {
    //       if (user) {
    //         return true;
    //       } else {
    //         this.util.navigate('login', true);
    //       }
    //     });
    //   }
    }
}
