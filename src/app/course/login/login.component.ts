import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private _router: Router){ }

  ngOnInit() {
  }
  onSubmit(value) {
    localStorage.setItem('isAdmin', '0');
    localStorage.setItem('isLogin', '1');
    localStorage.removeItem("level"),
    window.location.reload();
   // this.location.reload();

    console.log(value.userName);
    console.log(value.password);
    localStorage.setItem('admin', value.userName);
    this._router.navigate(["/admin"])

  }
  openSnackBar(message: string) {
    this.snackBar.open(message, " ", {
      duration: 5000,
    });
  }
}
