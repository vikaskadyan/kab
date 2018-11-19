import { Component, OnInit,ViewEncapsulation, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login-failed',
  templateUrl: './login-failed.component.html',
  styleUrls: ['./login-failed.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class LoginFailedComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {
  }

}
