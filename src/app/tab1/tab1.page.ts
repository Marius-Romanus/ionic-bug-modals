import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  items: string[] = [];
  loadding: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log('this.items 1', this.items);
    console.log('this.loadding 1', this.loadding);
    setTimeout(() => {
      this.items = ['A', 'B', 'C'];
      this.items.push('D');
      this.loadding = true;
      console.log('this.items 2', this.items);
      console.log('this.loadding 2', this.loadding);
    }, 3000);
  }

}
