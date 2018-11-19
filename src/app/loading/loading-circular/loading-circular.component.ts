import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-loading-circular',
  templateUrl: './loading-circular.component.html',
  styleUrls: ['./loading-circular.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class LoadingCircularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
