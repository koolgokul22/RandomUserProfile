import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://randomuser.me/api";
  constructor(private http: HttpClient) { }



  getUser(){
    return this.http.get(this.url);
  }
}
