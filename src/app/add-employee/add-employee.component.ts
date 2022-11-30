import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  EmpId=""
  FirstName=""
  HouseNO=""
  LastName=""
  houseNAme=""
  StreetName=""
  Pin=""
  District=""
  State=""
  Country=""
  Mob=""
  Email=""
  ParentName=""
  Gender=""
  HighestDegree=""
  YearExp=""
  dofJoin=""
  Username=""
  password=""
  confPassword=""

  readValues=()=>{
    let data={

      "EmpId":this.EmpId,
      "FirstName":this.FirstName,
      "HouseNO":this.HouseNO,
      "LastName":this.LastName,
      "houseNAme":this.houseNAme,
      "StreetName":this.StreetName,
      "Pin":this.Pin,
      "District":this.District,
      "State":this.State,
      "Country":this.Country,
      "Mob":this.Mob,
      "Email":this.Email,
      "ParentName":this.ParentName,
      "Gender":this.Gender,
      "HighestDegree":this.HighestDegree,
      "YearExp":this.YearExp,
      "dofJoin":this.dofJoin,
      "Username":this.Username,
      "password":this.password,
      "confPassword":this.confPassword

    }
    console.log(data)
    if (this.password != this.confPassword) {
      alert("password and conform password dosent match")
    }
  }


}
