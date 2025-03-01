import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'to-do-list-system';

  activity: any;
  price: any;
  type: any;
  booking: any = false;
  accessibility: any = 0;
  total: any;
  allTodoList: any[] = [];

  ngOnInit(): void {
    // retrieve existing data
    let getData: any = localStorage.getItem('dataList');
    const parseData = JSON.parse(getData); // parse existing data
    this.allTodoList = parseData;

    //get total list
    this.total = this.allTodoList.length
  }

  addList() {
    //push data object to array
    const data = {
      activity: this.activity,
      price: this.price,
      type: this.type,
      booking: this.booking,
      accessibility: this.accessibility,
    };
    this.allTodoList.push(data);

    // reset form
    this.activity = '';
    this.price = '';
    this.type = null;
    this.booking = false;
    this.accessibility = 0;

    //get total list
    this.total = this.allTodoList.length;

    //save data
    const dataString = JSON.stringify(this.allTodoList);
    localStorage.setItem('dataList', dataString);
  }

  deleteRow(i: any) {
    //remove index in array
    this.allTodoList.splice(i, 1);

    //get total list
    this.total = this.allTodoList.length;

    //save data
    const dataString = JSON.stringify(this.allTodoList);
    localStorage.setItem('dataList', dataString);
  }
}
