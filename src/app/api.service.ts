import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchcourse= ()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }

  fetchFriends =() =>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

  addCourse =(data:any)=>{
    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",data)
  }

  addFriend =(dataTosend:any)=>{
    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",dataTosend )
  }
}
