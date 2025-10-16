import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PageRoutes} from './_constants/page-routes';
import {LobbyComponent} from './lobby/lobby.component';
import {privateGuard} from './_guards/private.guard';
import {publicGuard} from './_guards/public.guard';

export const routes: Routes = [
  {
    path: PageRoutes.login,
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [publicGuard]
  },
  {
    path: PageRoutes.lobby,
    pathMatch: 'full',
    // component: LobbyComponent,
    loadChildren: () => import('./lobby/character.module').then((m) => m.CharacterModule),
    canActivate: [privateGuard]
  },
  // {
  //   path: 'lobby',
  //   children: [
  //     {
  //       path: 'product/:id'
  //     }
  //   ]
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
];
