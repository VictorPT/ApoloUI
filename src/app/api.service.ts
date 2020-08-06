import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./User";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://a708f679ef5b.ngrok.io/apolo';
  userList;

  getUsers() { 
    return this.http.get(this.baseUrl + '/userList');
  }

  getUserById(id: number){
    return this.http.get(this.baseUrl + id);
  }

  createUser(user: User){
    return this.http.post(this.baseUrl + '/addUser', user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + '/deleteUser/' + id);
  }
}