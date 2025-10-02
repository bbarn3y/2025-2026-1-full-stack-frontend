import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PageRoutes} from './_constants/page-routes';
import {LobbyComponent} from './lobby/lobby.component';

export const routes: Routes = [
  {
    path: PageRoutes.login,
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: PageRoutes.lobby,
    pathMatch: 'full',
    component: LobbyComponent
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
