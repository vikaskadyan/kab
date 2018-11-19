import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { IsUserLoggedInService } from '../services/is-user-logged-in.service';
import { SingletonutilityService } from '../singletonservices/singletonutility.service';

import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';

import {Subject} from 'rxjs/Subject';

import { EncryptionService } from '../services/encryption.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  _loginlogoutbutton ;
  islogoutbuttonshow = false;
  isloginbuttonshow = false;
  _showtotalstatus;
  totalcreated;
  totalprocessed;
  totalresolved;

  constructor(private loginService:LoginService,private cookie:CookieService,private isUserLoggedIn:IsUserLoggedInService,
              private router:Router,private singletonService:SingletonutilityService,private encry:EncryptionService) {
    
    this.singletonService.loginlogout.subscribe( value => {
      this._loginlogoutbutton = value;

      if(this._loginlogoutbutton == "Login") {
        this.isloginbuttonshow = false;
      }
      else if(this._loginlogoutbutton == "Logout") {
        this.isloginbuttonshow = true;
      }

    });

    this.totalcreated = this.cookie.get('totalcreated');
    this.totalprocessed = this.cookie.get('totalprocessed');
    this.totalresolved = this.cookie.get('totalresolved');  
    
    this.singletonService.totalstatus.subscribe( value => {
      this._showtotalstatus = value;
    });


    //var en = this.encry.encryptstring("my name is vikas");
    //console.log("en   " + en);

    //var de = this.encry.decryptstring(en);
    //console.log("de   " + de);
    

   }

  ngOnInit() {

    this._loginlogoutbutton = sessionStorage.getItem('loginlogoutbuttontext');
    this._showtotalstatus = sessionStorage.getItem('istotalstatus');

    this.totalcreated = this.cookie.get('totalcreated');
    this.totalprocessed = this.cookie.get('totalprocessed');
    this.totalresolved = this.cookie.get('totalresolved');

    this.singletonService.loginlogout.subscribe( value => {
      this._loginlogoutbutton = value;
    });

    
   }

   public logoutButtonClick() {
     this.singletonService.emitLoginLogoutButton("Login");
     this.singletonService.emittotalstatus(false);
     console.log("logout button clicked");
     this.cookie.deleteAll();
     this.router.navigateByUrl('');
   }

   public isLoginButtonShow() {
     return 
   }


}
