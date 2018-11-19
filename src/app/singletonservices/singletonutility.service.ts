import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class SingletonutilityService {

  totalstatus = new Subject<boolean>();
  loginlogout = new Subject<number>();

  constructor() { 
    this.emitLoginLogoutButton("Login");
    this.emittotalstatus(false);
  }

  public emitLoginLogoutButton(value) {
    this.loginlogout.next(value);
  }

  public emittotalstatus(value) {
    this.totalstatus.next(value);
  }

}
