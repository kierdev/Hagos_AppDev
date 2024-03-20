import { Component } from '@angular/core';
import { MyCustomPagePage } from '../my-custom-page/my-custom-page.page';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private dataService = this.DataService;
  objectNum = 0;
  objectArr: string[] = [];
  isLoading: boolean = false;
  loadingText: string = 'Loading';
  data: string = '';
  isAuthenticated = this.AuthenticationService.authenticate;

  constructor(
    private AuthenticationService: AuthenticationService,
    private DataService: DataService
  ) {}

  goWithAuthentication() {
    this.AuthenticationService.authenticate = true;
    alert('Access granted');
  }

  goWithUnAuthentication() {
    this.AuthenticationService.authenticate = false;
    alert('Access removed');
  }

  showObject() {
    if (this.AuthenticationService.authenticate) {
      console.log(this.objectArr);
    } else {
      alert('Please authenticate first.');
    }
  }
  async addToObject() {
    this.isLoading = true;
    await this.dataService
      .fetchData(this.AuthenticationService.authenticate)
      .then((data) => {
        console.log(data);
        this.objectArr = [...this.objectArr, this.objectNum.toString()];
        this.objectNum += 1;
      })
      .catch((error) => {
        alert('Please authenticate first.');

        console.error('Authentication failed', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}