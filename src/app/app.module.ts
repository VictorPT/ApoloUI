import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ApiService } from './api.service';

import { routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, routing, ReactiveFormsModule ],
  declarations: [ AppComponent, UserListComponent, AddUserComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ApiService ]
})
export class AppModule { }
