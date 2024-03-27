import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  id: any;
  data: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.removeItem('username'); //removing session variable
  }

  async loadData() {
    await this.dataService.fetchData().subscribe((response) => {
      this.data = response.results;
      this.data = this.data.slice(0, 5);
    });
  }
}
