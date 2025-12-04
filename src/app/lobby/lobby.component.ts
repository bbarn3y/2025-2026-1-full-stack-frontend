import { Component } from '@angular/core';
import {RoutingService} from '../_service/routing.service';
import {UserService} from '../_service/user.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {CharacterCreatorComponent} from './character-creator/character-creator.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lobby',
  standalone: false,
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.less'
})
export class LobbyComponent {

  constructor(private nzModal: NzModalService,
              private routingService: RoutingService,
              public translate: TranslateService,
              private userService: UserService) {
    translate.onLangChange.subscribe((langChange) => {
    })
  }

  logout() {
    this.userService.removeSession();
    this.routingService.routeToLogin();
  }

  openCharacterCreator(): void {
    this.nzModal.create({
      nzTitle: this.translate.instant('CHARACTER.CREATE'),
      nzContent: CharacterCreatorComponent,
      nzFooter: null
    });
  }

}
