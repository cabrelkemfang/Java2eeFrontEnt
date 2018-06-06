

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { Course } from './course';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.cpHeaders });
  data: any;

  private course: Course;
  private level:number;

  constructor(private _http: Http) { }

  getAllCourse() {

    return this._http.get('http://localhost:4200/api/courses', this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  

  saveCourse(course) {
    return this._http.post('http://localhost:4200/api/courses',JSON.stringify(course), this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  getAllCoursePerLevel(level) {
    return this._http.get('http://localhost:4200/api/allCourses/' +level, this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  getAllCoursePerLevelOptionSemester(level:number,option:String,semester:number) {
    return this._http.get('http://localhost:4200/api/allCourses/'+level+'/'+option+'/'+semester, this.options)
      .pipe(map(res => res.json()) // or any other operator
      );
  }

  deleteCourse(id:number) {
    return this._http.delete('http://localhost:4200/api/course/'+id, this.options)
    .pipe(map(res => res.json()) // or any other operator
  );
  }
  
  setter(course: Course) {
    this.course = course;
  } 

  getter() {
    return this.course;
  }

  pdfReport(courses):Observable<Blob> {
    let options = new RequestOptions({responseType: ResponseContentType.Blob});
    return this._http.post('http://localhost:4200/api/pdfreport',JSON.stringify(courses),options)
      .pipe(map((response: Response) => <Blob>response.blob()) // or any other operator
      );
  }


setlevel(value:number){
  this.level=value;
}
getLevel(){
  return this.level;
}

}
