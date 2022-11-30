import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router){}
  empId=""
  password=""

  readValue=()=>{
    let data={
      "usename":this.empId,
      "password":this.password
    }
    console.log(data)
    if (this.empId=="1122" && this.password=="12345") {
      alert("succes")
      this.route.navigate(['/add_course'])

    } else {
      alert("Invalid credntials")
    }
  }

}
