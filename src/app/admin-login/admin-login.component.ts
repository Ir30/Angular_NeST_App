import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private rout:Router){}
  usename=""
  password=""

  readValue=()=>{
    let data={"usename":this.usename,"password":this.password}
    console.log(data)
    if (this.usename=="admin" && this.password=="nestdigital") {
      alert("success")
      this.password=""
      this.usename=""
    } else {
      alert("invalid credential") 
    }
  }
}
