import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxFormConfig } from '@ngx-plus/ngx-forms';

import { Router } from '@angular/router';

import { LoginService } from '../services/login.service'
import { LoginFailedComponent } from '../login-failed/login-failed.component'
import { LoadingCircularComponent } from '../loading/loading-circular/loading-circular.component'
import { IsProxyEnableService } from '../services/is-proxy-enable.service'
import { IsUserLoggedInService } from '../services/is-user-logged-in.service';
import { SingletonutilityService } from '../singletonservices/singletonutility.service'

import { MatDialog , MatProgressBarModule} from '@angular/material'
import { User } from '../model/user.model';
import { UserData } from '../model/user-data.model'

import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { GetUtilityService } from '../services/get-utility.service'
import { EncryptionService } from '../services/encryption.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
  encapsulation : ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  dialogResult;
  primary = 'primary';
  dialog;

  incorrectUserandPassword = "Incorrect Email/Username or password. Please try again";
  navigate = false;

  constructor(private router: Router, private _loginService: LoginService, private matdialog:MatDialog, 
              private cookie:CookieService, private getUtilityService:GetUtilityService,
              private isProxy:IsProxyEnableService,private isuserloggedinservice:IsUserLoggedInService,
              private singletonService:SingletonutilityService,private encryption:EncryptionService) {
    
  }

  ngOnInit() {

    let isUserLogin = this.isuserloggedinservice.isUserLoggedIn();
    if(isUserLogin) {
      this.router.navigate(['/policecontrolroom']);
    }

  }

  public loginUser(value: any) {

    if(value.UserId == "proxy" && value.UserCode == "proxy") {

      this.isProxy.setIsProxyEnable(true);

      var isproxy_encryptstring = this.encryption.encryptstring('isproxy');

      var isproxy_getfrom_service = JSON.stringify(this.isProxy.getIsProxyEnable());

      var isproxy_value_encryptstring = this.encryption.encryptstring(isproxy_getfrom_service);

      //console.log("klklklkl@@@@ " + isproxy_value_encryptstring);

      this.cookie.set(isproxy_encryptstring,isproxy_value_encryptstring,this.getUtilityService.getTimeForCookies(50,100));
      
    }
    else {
      this.isProxy.setIsProxyEnable(false);

      var isproxy_encryptstring = this.encryption.encryptstring('isproxy');

      var isproxy_getfrom_service = JSON.stringify(this.isProxy.getIsProxyEnable());

      var isproxy_value_encryptstring = this.encryption.encryptstring(isproxy_getfrom_service);

      this.cookie.set(isproxy_encryptstring,isproxy_value_encryptstring,this.getUtilityService.getTimeForCookies(50,100));
      
    }

    this.openCircularProgressPopUp();
    
    this._loginService.getUserDetails(JSON.stringify(value)).subscribe( res => {
    let _user = <User>JSON.parse(JSON.stringify(res));
    this.dialog.close();
    
    let userdata = <UserData> JSON.parse(JSON.stringify(_user.Data));

    let _userID:string = JSON.stringify(userdata.Id);
    let _userID_encrypt = this.encryption.encryptstring(_userID);

    let _oAuthToken:string = userdata.Token;
    let _oauthToken_encrypt = this.encryption.encryptstring(_oAuthToken);

    if(_user.IsSuccess == 1) {

      this.singletonService.emitLoginLogoutButton("Logout");
      sessionStorage.setItem('loginlogoutbuttontext','Logout');
      sessionStorage.setItem('istotalstatus',JSON.stringify(true));

      this.singletonService.emittotalstatus(true);

      this.cookie.set(this.encryption.encryptstring('kabUserIsLogged'),this.encryption.encryptstring("true"),this.getUtilityService.getTimeForCookies(50,100));
      this.cookie.set(this.encryption.encryptstring('kabUserID'),_userID_encrypt,this.getUtilityService.getTimeForCookies(50,100));
      this.cookie.set(this.encryption.encryptstring('kabUseroAuthToken'),_oauthToken_encrypt,this.getUtilityService.getTimeForCookies(50,100));

      this.router.navigate(['/policecontrolroom']);

    }
    else {
      this.loginFailed();
    }
    });

  }

  public loginButtonClick() {

    this.router.navigateByUrl('/policecontrolroom');

  }

  public openCircularProgressPopUp() {
    this.dialog = this.matdialog.open( LoadingCircularComponent ,{
      panelClass :'mat-dialog-container1a',
      disableClose : true
    });

    this.dialog.afterClosed().subscribe( result => {
      console.log(`data closed : ${result}` );
    });

  }

  public loginFailed() {
    this.dialog = this.matdialog.open( LoginFailedComponent , {
      data : this.incorrectUserandPassword,
      width : '400px'
    });

    this.dialog.afterClosed().subscribe( result => {
      console.log("failed closed");
      if(this.navigate == true) {
        this.router.navigateByUrl('/test');
      }
      
    });
    
  }


  public openCircularProgressPopUpWithOut() {
    this.dialog = this.matdialog.open( LoadingCircularComponent ,{
      panelClass :'mat-dialog-container-loading-circular',
      disableClose : true,
    });

    this.dialog.afterClosed().subscribe( result => {
      console.log(`data closed : ${result}` );
      this.dialogResult = result;
    });

  }

}
