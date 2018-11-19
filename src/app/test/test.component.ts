import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data = [
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      passed: 'Yes',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      passed: 'Yes',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      passed: 'Yes',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Yes',
    },
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
