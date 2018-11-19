import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.css']
})
export class UpdateButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  example() {
    alert("Update Button clicked");
  }
}
