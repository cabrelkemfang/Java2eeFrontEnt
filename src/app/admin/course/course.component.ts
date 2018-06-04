import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Course } from '../../course';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  ELEMENT_DATA: Course[] = [];
  level: number;
  option1: Boolean;
  lev: Boolean;
  private dialogResult;
  private pro;

  constructor(private _service: ServiceService, private _router: Router, public dialog: MatDialog) { }

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

    this.level = parseInt(localStorage.getItem('level'));
    this._service.getAllCoursePerLevel(this.level)
      .subscribe((data) => {
        this.ELEMENT_DATA = data;
        console.log(this.ELEMENT_DATA);

      },
        (error) => { console.log(error) })
  }

  function(option: String, semester: number) {
    if (option == undefined && semester == undefined) {

    } else {

      console.log(option, semester, this.level)
      this._service.getAllCoursePerLevelOptionSemester(this.level, option, semester)
        .subscribe((data) => {
          this.ELEMENT_DATA = data;
          console.log(this.ELEMENT_DATA);

        },
          (error) => { console.log(error) })
    }
  }
  open(value) {
    console.log(value);
    localStorage.setItem('value', JSON.stringify(value));
    this._router.navigate(["/outline"])

  }

  delete(value) {


    const dialogRef = this.dialog.open(ConfirmationComponent, {
      height: '150px',
      width: '600px'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == "Confirm") {
        this.pro=true;
        this._service.deleteCourse(value.id)
          .subscribe((data) => {
            this.ELEMENT_DATA.splice(this.ELEMENT_DATA.indexOf(value), 1);
            //
          }, ((error) => {
            console.log((error));
          }))


          setTimeout(() => 
          {
            this.level = parseInt(localStorage.getItem('level'));
            this._service.getAllCoursePerLevel(this.level)
              .subscribe((data) => {
                this.ELEMENT_DATA = data;
                console.log(this.ELEMENT_DATA);
                this.pro=false;
    
              },
                (error) => { console.log(error) })
          },
          2000);

       

      } else {

      }
    });



  }

  add() {
    this._router.navigate(["new_course"])
  }

}
