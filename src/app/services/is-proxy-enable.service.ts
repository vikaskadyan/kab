import { Injectable } from '@angular/core';

@Injectable()
export class IsProxyEnableService {

  private _isProxyEnabled = false;

  constructor() { }

  public setIsProxyEnable(proxyValue:boolean) {
    this._isProxyEnabled = proxyValue;
  }

  public getIsProxyEnable():boolean {
    return this._isProxyEnabled;
  }

}
