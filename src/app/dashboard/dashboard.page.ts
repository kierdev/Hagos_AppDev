import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;

  constructor() {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username'); //getting session variable
  }
}
