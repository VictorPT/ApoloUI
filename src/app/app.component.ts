import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  readonly ROOT_URL = 'http://172.23.112.1:8080/apolo';

  posts: any;

  constructor(private http: HttpClient) {}

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + "/userList")
  }

}
