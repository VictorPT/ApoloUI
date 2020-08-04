import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./User";
import {Observable} from "rxjs/index";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://d53ae1ecdc92.ngrok.io/apolo';
  userList;

  getUsers() { 
    this.http.get('https://d53ae1ecdc92.ngrok.io/apolo/userList').subscribe(
      data  => {
        console.log("POST Request is successful ", data);
        this.userList = data;
      },
      error  => {
      console.log("Error", error);
      }
    )
    return this.userList;
  }

  getUserById(id: number){
    return this.http.get(this.baseUrl + id);
  }

  createUser(user: User){
    return this.http.post(this.baseUrl, user);
  }

  deleteUser(id: number){
    return this.http.delete(this.baseUrl + id);
  }
}