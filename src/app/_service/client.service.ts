import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  loginHttp(): Observable<{ token: string }> {
    return this.http.get<{token: string}>('https://mocki.io/v1/67e94399-6c92-477f-b3c2-25f701e2a961')
  }

  loginMock() {
    return of({ "token": "my-generated-token"})
      .pipe(delay(1000));
  }
}
