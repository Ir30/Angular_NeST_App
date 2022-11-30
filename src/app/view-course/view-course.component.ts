import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor(private api:ApiService){
    api.fetchcourse().subscribe(
  
    (response)=>{
      this.data=response
    }
    )
  }

  data:any=[]

}
