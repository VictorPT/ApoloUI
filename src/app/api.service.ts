import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./User";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://6e30e9c27a0c.ngrok.io/apolo';
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