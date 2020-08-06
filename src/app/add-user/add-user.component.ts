import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      userId: [''],
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userAddress: ['', Validators.required],
      userPhone: ['', Validators.required]
    });

  }

  goHome(){
    this.router.navigate(['']);
  }

  onSubmit() {
    var x = document.forms["myForm"]["userName"].value;
    var y = document.forms["myForm"]["userEmail"].value;
    if (x == "" || y == "") {
      alert("Nombre e E-Mail son campos obligatorios.");
    }
    else{
      this.apiService.createUser(this.addForm.value).subscribe( 
        data => {
         this.router.navigate(['']);
        },
        error  => {
          console.log("Error", error);
      });
    }
  }

  omitSpecialChar(event){
    var k;  
    k = event.keyCode; 
    return((k >= 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 44 || k == 46 || k == 32 || (k >= 48 && k <= 57));
  }

}