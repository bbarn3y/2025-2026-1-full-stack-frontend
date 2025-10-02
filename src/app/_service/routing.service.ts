import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {PageRoutes} from '../_constants/page-routes';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) {}

  routeToLobby() {
    this.router.navigateByUrl(`/${PageRoutes.lobby}`);
  }

  routeToLogin() {
    this.router.navigateByUrl(`/${PageRoutes.login}`);
  }
}
