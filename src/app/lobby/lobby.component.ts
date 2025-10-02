import { Component } from '@angular/core';
import {RoutingService} from '../_service/routing.service';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-lobby',
  imports: [
    NzButtonModule
  ],
  standalone: true,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(private routingService: RoutingService) {
  }

  logout() {
    this.routingService.routeToLogin();
  }

}
