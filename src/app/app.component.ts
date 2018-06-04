import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isAdmin;
  private isLogin;

  constructor(private _router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
    let tmp = parseInt(localStorage.getItem('isLogin'));
    if (tmp == undefined) {
      this.isLogin = 0;
    } else {
      this.isLogin = tmp;
    }
    console.log(this.isAdmin, this.isLogin)
  }

  home() {
    this._router.navigate(["/home"])
  }

  login() {
    this._router.navigate(["/login"])
  }

  logout() {
    this._router.navigate(["/home"])
    localStorage.setItem('isAdmin', '1');
    localStorage.setItem('isLogin', '0');
    localStorage.removeItem("level");
    localStorage.removeItem("admin"),

    this.isAdmin = parseInt(localStorage.getItem('isAdmin'));
    let tmp = parseInt(localStorage.getItem('isLogin'));
    if (tmp == undefined) {
      this.isLogin = 0;
    } else {
      this.isLogin = tmp;
    }
  }
}
