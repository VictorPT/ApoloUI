import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from '../api.service'
import { HttpClient } from '@angular/common/http';
import { User } from '../User'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList;
  users: User[];

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.users = this.apiService.getUsers();
  }
 

}