import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../_service/user.service';
import {RoutingService} from '../_service/routing.service';

export const publicGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);

  if (userService.isLoggedIn) {
    inject(RoutingService).routeToLobby();
  }
  return !userService.isLoggedIn;
};
