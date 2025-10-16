import { Component } from '@angular/core';
import {RoutingService} from '../_service/routing.service';
import {UserService} from '../_service/user.service';

@Component({
  selector: 'app-lobby',
  standalone: false,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(private routingService: RoutingService,
              private userService: UserService) {
  }

  logout() {
    this.userService.removeSession();
    this.routingService.routeToLogin();
  }

}
