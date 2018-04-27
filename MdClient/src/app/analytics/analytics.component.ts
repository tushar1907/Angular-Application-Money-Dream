import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }
  userName: string;
  ngOnInit() {

    this.userName = JSON.parse(localStorage.getItem("userLogin")).userName;
  }

}
