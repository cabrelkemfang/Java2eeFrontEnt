import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { Contents } from '../../contents';
import { forEach } from '@angular/router/src/utils/collection';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  private level;
  private lev;
  private option;
  public contents: Contents[] = [];
  public course1: Course = new Course();
  content: string;
  chapter: number;
  private pro1;


  constructor(private _service: ServiceService, private _router: Router) { }

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
    if ((value.chapter == null) && (value.content == undefined)) {
      this.chapter = null;
      this.content = '';
    }
    else {
      this.contents.push(value);
      console.log(this.contents);
      this.chapter = null;
      this.content = '';
    }
  }


  delete(value) {
    console.log(value);
    console.log(this.contents.indexOf(value));

    this.contents.splice(this.contents.indexOf(value), 1);
  }


  save() {
    
    let level1 = parseInt(localStorage.getItem('level'));
    this.course1.level = level1;

    for (var i = 0; i < this.contents.length; i++) {
      this.course1.contents[i] = this.contents[i];
    }
   
    console.log(this.course1);
    if (this.course1.semester < 3) {
      this.pro1=true;
      this._service.saveCourse(this.course1).subscribe((data) => {

        console.log(data);
      }, (error) => {
        console.log(error);
      })
      setTimeout(() => 
      {
        this.pro1=false;
        this._router.navigate(["/course_manager"])
      },
      3000);

      

    } else {

    }
  }


}
