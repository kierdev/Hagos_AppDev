import { Component } from '@angular/core';
import { MyCustomPagePage } from '../my-custom-page/my-custom-page.page';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      this.AuthenticationService.currentPage = 2;
      this.router.navigate(['my-custom-page']);
      this.AuthenticationService.authenticate = false;
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
