import { Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { IsProxyEnableService } from '../services/is-proxy-enable.service';

import { User } from '../model/user.model';
import { HttpResponse } from '@angular/common/http/src/response';
import { Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';

import { EncryptionService } from '../services/encryption.service'

@Injectable()
export class LoginService implements OnInit {

  private loginAPIURL = "https://kabapi.azurewebsites.net/api/User/LoginUser";
  private loginProxyURL = "./assets/json/login.json";

  private userLoginDetails:any;

  private userCred = 'UserId=9999079704&UserCode=0707';

  public loginButtonText = "Login";

  constructor(private http: HttpClient,private isProxy:IsProxyEnableService,private cookie:CookieService,
              private router:Router,private encryption:EncryptionService) { 

  }

  ngOnInit(): void {
   
  }

  public getUserDetails(body:any) {

    let _isproxy = this.cookie.get(this.encryption.encryptstring('isproxy'));


    let _isproxy_decryptstring = this.encryption.decryptstring(_isproxy);


    if(_isproxy_decryptstring == "true") {
      console.log("proxy enabled " + _isproxy_decryptstring);
      return this.getProxyUserDetails();
    }
    else {

      console.log("proxy disabled  " + _isproxy_decryptstring + "   4444");

      var _body = JSON.parse(body);
    
    let _headers = new HttpHeaders();
    _headers.append('Content-Type','application/x-www-form-urlencoded' );
   
    var _requestBody = new HttpParams().set('UserId',_body.UserId).set('UserCode',_body.UserCode);

   return this.http.post(this.loginAPIURL,_requestBody,{ headers: _headers, observe: 'response'}).pipe(map( res => {
     console.log("request body " + res.body.toString());
     return res.body;
   }));

    }
   
  }



  public getProxyUserDetails() {
    
    return this.http.get(this.loginProxyURL).pipe(map( res => {
     console.log("request body " + res);
     return res;
   }));
   
  }

  public logoutUser() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('');
  }

}
