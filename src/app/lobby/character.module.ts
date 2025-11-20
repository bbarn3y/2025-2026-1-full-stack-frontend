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
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzFormModule} from 'ng-zorro-antd/form';
import {CharacterCreatorComponent} from './character-creator/character-creator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';

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
    CharacterCreatorComponent,
    CharacterListingComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzPopconfirmModule,
    NzSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CharacterModule { }
