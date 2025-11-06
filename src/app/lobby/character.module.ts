import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {LobbyComponent} from './lobby.component';
import {CharacterListingComponent} from './character-listing/character-listing.component';
import {CharacterCardComponent} from './character-card/character-card.component';
import {RouterModule, Routes} from '@angular/router';
import {PageRoutes} from '../_constants/page-routes';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent
  },
  {
    path: '**',
    redirectTo: `/${PageRoutes.lobby}`
  }
]

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListingComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    RouterModule.forChild(routes)
  ]
})
export class CharacterModule { }
