import { Component } from '@angular/core';
import { MyCustomPagePage } from '../my-custom-page/my-custom-page.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  constructor(private router: Router){

  }

  goToCustomPage(){
    this.router.navigate(["my-custom-page",23]);
  }


}


