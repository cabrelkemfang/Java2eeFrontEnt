import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { Contents } from '../../contents';
import { forEach } from '@angular/router/src/utils/collection';
import { ServiceService } from '../../service.service';

import { parse } from 'path';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  private level;
  private lev;
  private option;
  private contents: object[] = [];
  public course1:Course;

  
  constructor(private _service: ServiceService) { }

  ngOnInit() {
    this.level = parseInt(localStorage.getItem('level'));
    if ((this.level == 400) || (this.level == 500)) {
      this.lev = true;
      this.option = false;
    } else
      if ((this.level == 200) || (this.level == 300)) {
        this.lev = false;
        this.option = true;
      }
  }
  displayedColumns = ['chapter', 'content', 'but1'];

  onSubmit(value) {
    this.contents.push(value);
    console.log(this.contents);
  }


  delete(value) {
    this.contents.splice(this.contents.indexOf(value), 1);
  }


  save(value1,value2,value3,value4,value5,value6,value7) {
    // this.contents.forEach(function (value) {
    //  // console.log(value);

    // });
    

    let level1 = parseInt(localStorage.getItem('level'));
    this.course1.course_code=value1;
    this.course1.course_master=value2;
  

    //this.course1.content.push({ chapter_number: 5, content: "bkn,n" });
    console.log(this.course1);
    console.log(value1,value2,value3,value4,value5,value6,value7)
 
  

    // this._service.saveCourse(this.course1).subscribe((data) => {

    //   console.log(data);
    // }, (error) => {
    //   console.log(error);
    // })

  }

}
