import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.page.html',
  styleUrls: ['my-custom-page.scss'],
})
export class MyCustomPagePage {
  linkAuthenticate = false;
  constructor(
    private AuthenticationService: AuthenticationService,
    private router: Router
  ) {}

  goWithAuthentication() {
    this.AuthenticationService.authenticate = true;
    this.linkAuthenticate = true;
    if (this.AuthenticationService.authenticate) {
      alert('Authentication Complete');
    }
    //this.router.navigate(['another']);
  }

  goToCustomPage() {
    if (this.AuthenticationService.authenticate) {
      this.router.navigate(['third-custom-page']);
    } else {
      alert('Please Authenticate first');
    }
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
