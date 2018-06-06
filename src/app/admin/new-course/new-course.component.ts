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
  public contents: object[] = [];
  public course1: Course = new Course();
  content: string;
  chapter_number: number;


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
    if ((value.chapter_number == null) && (value.content == undefined)) {
      this.chapter_number = null;
      this.content = '';
    }
    else {
      this.contents.push(value);
      console.log(this.contents);
      this.chapter_number = null;
      this.content = '';
    }
  }


  delete(value) {
    console.log(value);
    console.log(this.contents.indexOf(value));

    this.contents.splice(this.contents.indexOf(value), 1);
  }


  save() {
    this.contents.forEach(function (value) {
      console.log(value)
      this.course1.content.push(value);

    });

    let level1 = parseInt(localStorage.getItem('level'));
    this.course1.level = level1;
    // this.course1.content.push(
    //   {chapter_number: 12, content: "b,nb,nb"});
    console.log(this.course1);
    if (this.course1.semester < 3) {
      this._service.saveCourse(this.course1).subscribe((data) => {

        console.log(data);
      }, (error) => {
        console.log(error);
      })
      this._router.navigate(["/course_manager"])

    }else{
      
    }
  }


}
