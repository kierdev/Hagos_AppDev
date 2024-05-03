import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/Data/data.service';
import { Car } from '../Model/car.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../Services/Authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading: boolean = true;
  carList: Car[] = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private authenticationService: AuthenticationService,
    private alertController: AlertController
  ) {}

  logOut() {
    this.authenticationService.setAuthentication(false);
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.fetch();
  }

  navigateToSignUp() {
    this.router.navigate(['signup']);
  }

  fetch() {
    this.dataService
      .getAllCars()
      .then((data) => {
        this.carList = data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  edit(car: Car) {
    this.router.navigate([`update/${car.id}`]);
  }

  async deleteConfirmation(car: Car) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to confirm this action?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Delete cancelled');
          },
        },
        {
          text: 'Confirm',
          handler: () => {
            this.deleteCar(car);
          },
        },
      ],
    });
    await alert.present();
  }
  deleteCar(car: Car) {
    this.dataService.deleteCar(car).then(() => {
      window.location.reload();
    });
  }
}
