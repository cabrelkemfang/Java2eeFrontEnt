import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../course';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  ELEMENT_DATA: Course[] = [];
  ToatocreitValue = 0;
  level: number;
  option1: Boolean;
  lev: Boolean;


  constructor(private _service: ServiceService, private _router: Router) { }
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {

    this.level = parseInt(localStorage.getItem('level'));
    if ((this.level == 400) || (this.level == 500)) {
      this.lev = true;
      this.option1 = false;
    } else
      if ((this.level == 200) || (this.level == 300)) {
        this.lev = false;
        this.option1 = true;
      }

    this._service.getAllCoursePerLevel(this.level)
      .subscribe((data) => {
        this.ELEMENT_DATA = data;
        console.log(this.ELEMENT_DATA);
        for (var i: number; i <= Object.keys(data).length; i++) {
          this.ToatocreitValue = this.ToatocreitValue + data.course_value;
        }
      },
        (error) => { console.log(error) })
  }

  displayedColumns = ['id', 'course_title', 'course_value', 'course_status', 'course_master'];



  function(option: String, semester: number) {
    if (option == undefined && semester == undefined) {

    } else {

      console.log(option, semester, this.level)
      this._service.getAllCoursePerLevelOptionSemester(this.level, option, semester)
        .subscribe((data) => {
          this.ELEMENT_DATA = data;
          console.log(this.ELEMENT_DATA);
          for (var i: number; i <= Object.keys(data).length; i++) {
            this.ToatocreitValue = this.ToatocreitValue + data.course_value;
          }
        },
          (error) => { console.log(error) })
    }
  }
  open(value) {
    console.log(value);
    localStorage.setItem('value', JSON.stringify(value));
    this._router.navigate(["/outline"])

  }

  printpdf() {
   
    this._service.pdfReport(this.ELEMENT_DATA).subscribe((data) => {
      var file = new Blob([data], { type: 'application/pdf' });            
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }, (error) => {
      console.log(error);
    })

  }
}


