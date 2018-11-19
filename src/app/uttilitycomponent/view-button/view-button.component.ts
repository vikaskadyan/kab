import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent implements OnInit {

  userLat:number;
  userLong:Number;
  userData;
  soslong;
  soslat;

  direction;

  directionoptions = {
    suppressMarkers: true,
    draggable: false,
    travelMode: 'DRIVING',

  };


  constructor(@Inject(MAT_DIALOG_DATA) public data:string) { 
    this.userData = data;
    console.log("user id is " + this.userData.id);
    this.userLat = <number> JSON.parse(this.userData.lat);
    this.userLong = <number> JSON.parse(this.userData.long);
    //this.soslat = <number> JSON.parse(this.userData.soslocationlat);
    //this.soslong = <Float64Array> JSON.parse(this.userData.soslocationlong);

    this.soslat = 28.5591041;
    this.soslong = 77.2607094;

    console.log("user lat is " + this.userLat);
    console.log("user long is " + this.userLong);

    this.direction = {
      origin : {
        lat: this.userLat,
        lng: this.userLong,
      },
      destination : {
        lat:this.soslat,
        lng:this.soslong
      }
      
      
    }
    
  }

  ngOnInit() {    

  }

  example() {
    alert("View Button clicked");
  }

}
