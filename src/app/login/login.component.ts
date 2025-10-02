import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RoutingService} from '../_service/routing.service';
import {ClientService} from '../_service/client.service';

@Component({
  selector: 'app-login',
  imports: [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private clientService: ClientService,
              private fb: FormBuilder,
              private routingService: RoutingService) {
    this.loginForm = fb.group({
      username: fb.control('demo@gmail.com', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
    });
  }

  submitForm() {
    this.clientService.loginHttp()
      .subscribe((response) => {
        console.log(response);
        this.routingService.routeToLobby();
      })
  }

}
