import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  numberPerPageOptions: number[] = [10, 15, 30, 50, 100];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 200;

  constructor() {}

  setPage(p: number) {
    this.page = p;
  }

  selectChange($event) {
    console.log($event);
  }
}
