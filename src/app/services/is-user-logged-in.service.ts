import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EncryptionService } from '../services/encryption.service';
@Injectable()
export class IsUserLoggedInService {

  constructor(private cookie:CookieService,private encryption:EncryptionService) { }

  public isUserLoggedIn():boolean {
    let kabuser = this.cookie.get(this.encryption.encryptstring('kabUserIsLogged'));
    let kabuser_decrypt = this.encryption.decryptstring(kabuser);

    console.log("kabuser decrypt " + kabuser_decrypt);
    if(kabuser_decrypt == "true") {
      return true;
    }
    else {
      return false;
    }
  }

}
