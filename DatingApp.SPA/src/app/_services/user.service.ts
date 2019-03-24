import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../_models/iuser';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(id): Observable<Iuser> {
    return this.http.get<Iuser>(this.baseUrl + 'users/' + id, httpOptions);
  }
}
