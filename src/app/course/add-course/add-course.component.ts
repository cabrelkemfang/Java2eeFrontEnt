import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  private course;
  constructor(private _service: ServiceService, ) { }

  ngOnInit() {
    this.course = JSON.parse(localStorage.getItem('value'));
    console.log(this.course);
  }

  displayedColumns = ['chapter','content'];
  
}

