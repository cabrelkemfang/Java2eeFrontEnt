import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
valueChoise:number;

  constructor(private _service: ServiceService, private _router: Router) { }

  ngOnInit() {
  }
  
  unclick(level){
    if (level==undefined){

    }else{
//this._service.setlevel(level)
localStorage.setItem('level', level);

      this._router.navigate(["/course"])

    }
  }
}
