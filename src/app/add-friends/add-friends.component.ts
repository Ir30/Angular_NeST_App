import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {

  constructor(private api:ApiService){}


  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{
    let data = {
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {//checking the data sending status and give the instruction to the user throug alert box
          alert("Added succesfully")
          this.DescribeYourFriend=""
          this.friendName=""
          this.name=""
          this.friendNickName=""
        } else {
          alert("Somthing wentwrong")
        }
    
      }
    )

  }

}
