import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class GetUtilityService {

  totalcreated = 0;
  totalprocessed = 0;
  totalresolved = 0;

  constructor(private cookie:CookieService) { }

  public getCurrentTime():any {
    var date = new Date();
    return date;
  }

  public getTimeForCookies(minute:number,second:number):any {
    let date = new Date();
    date.setTime(date.getTime() + (minute*second*1000));
    return date;
  }

  public getFloat(value):number {
    return parseFloat(value);
  }

  public setStatusOfTotalRequest(data) {

    for(let userData of data.Data) {
      if(userData.RequestStatus == "CREATED") {
        this.totalcreated++;
      }
      if(userData.RequestStatus == "PROCESSED") {
        this.totalprocessed++;
      }
      if(userData.RequestStatus == "RESOLVED") {
        this.totalresolved++;
      }
    }

    this.cookie.set('totalcreated',JSON.stringify(this.totalcreated));
    this.cookie.set('totalprocessed',JSON.stringify(this.totalprocessed));
    this.cookie.set('totalresolved',JSON.stringify(this.totalresolved));
    

  }

}
