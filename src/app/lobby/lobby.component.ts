import { Component } from '@angular/core';
import {RoutingService} from '../_service/routing.service';
import {UserService} from '../_service/user.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {CharacterCreatorComponent} from './character-creator/character-creator.component';

@Component({
  selector: 'app-lobby',
  standalone: false,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(private nzModal: NzModalService,
              private routingService: RoutingService,
              private userService: UserService) {
  }

  logout() {
    this.userService.removeSession();
    this.routingService.routeToLogin();
  }

  openCharacterCreator(): void {
    this.nzModal.create({
      nzTitle: 'Create a character',
      nzContent: CharacterCreatorComponent,
      nzFooter: null
    });
  }

}
