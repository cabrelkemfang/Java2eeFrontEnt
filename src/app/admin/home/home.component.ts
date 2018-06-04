import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
admin:String;
  constructor(private _service: ServiceService, private _router: Router) { }

  ngOnInit() {
    this.admin=localStorage.getItem('admin');
  }
  unclick(level){
    if (level==undefined){

    }else{
//this._service.setlevel(level)
localStorage.setItem('level', level);

      this._router.navigate(["/course_manager"])

    }
  }
}
