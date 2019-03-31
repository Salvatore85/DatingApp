import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../_models/iuser';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<Iuser> {
    return this.http.get<Iuser>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: Iuser) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
}
