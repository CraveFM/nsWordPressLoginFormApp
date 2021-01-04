import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  register(user: User): Observable<string> {
    return;
  }

  login(user: User): Observable<string> {
    return;
  }

  logout() {
  }

  resetPassword(email: string) {
  }

}
