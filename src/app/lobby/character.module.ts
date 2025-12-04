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
import {SelectedCharDirective} from '../_directives/selected-char.directive';
import {FormatNamePipe} from '../_pipes/format-name.pipe';
import {TranslatePipe} from '@ngx-translate/core';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';

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
    FormatNamePipe,
    LobbyComponent,
    SelectedCharDirective
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    NzCardModule,
    NzDropDownModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzPopconfirmModule,
    NzSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslatePipe
  ]
})
export class CharacterModule { }
