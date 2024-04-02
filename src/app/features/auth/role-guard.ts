import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ApiService } from '../store/services/store.service';
import { Device } from 'src/app/models/Device';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {

    device!: Device

    constructor(private authService: AuthService, private router: Router,private storeService: ApiService){
        
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
        if (this.authService.isLogged) {
            this.storeService.getSingleDevice(route.params['id']).then(res => {
                this.device = res as Device
            })
            if (this.authService.user?.user.uid == this.device.ownerId){
                return true
            } else {
                return this.router.parseUrl('/login')
            }
        } else {
          return this.router.parseUrl('/login')
        }
    }
}
