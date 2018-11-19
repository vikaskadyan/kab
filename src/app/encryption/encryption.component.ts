import { Component, OnInit } from '@angular/core';

import { EncryptionService } from '../services/encryption.service'

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.css']
})
export class EncryptionComponent implements OnInit {

  decryptValue:any = "default";
  encryptValue:any = "default";

  constructor(private encryption:EncryptionService) { }

  ngOnInit() {
  }

  public decrypt(value:any) {


    console.log("submit button clicked  " + value.envalue);

    this.decryptValue = this.encryption.decryptstring(value.envalue);
  }


  public encrypt(value:any) {


    console.log("submit button clicked   " + value.envalue);

    this.encryptValue = this.encryption.encryptstring(value.envalue);
  }

}
