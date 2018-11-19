import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {

  constructor() { }

  public encryptstring(message): any {

    var key = CryptoJS.enc.Base64.parse("vikaskadyan");
    var iv = CryptoJS.enc.Base64.parse('16');

   // console.log("value from en is  " + message);

    var encrypted = CryptoJS.AES.encrypt(message,key,{iv:iv});

   //console.log("encrpted string is @@@!!!" + encrypted);

    return encrypted;
  }

  public decryptstring(enmessage): any {

    var key = CryptoJS.enc.Base64.parse("vikaskadyan");
    var iv = CryptoJS.enc.Base64.parse('16');

    //console.log("value from en is  " + enmessage);

    var decrypted = CryptoJS.AES.decrypt(enmessage,key,{iv:iv});

    var decryptedString =  decrypted.toString((CryptoJS.enc.Utf8));

    //console.log("decrypted string is "+ decryptedString);

    return decryptedString;

  }

  //OtTRgAFdU6AJPUrLPVC7Zw==
  //OtTRgAFdU6AJPUrLPVC7Zw%3D%3D

}

