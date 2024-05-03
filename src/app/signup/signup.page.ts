import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/Data/data.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Car } from '../Model/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  // temporary data types and will be converted later
  carBrand: string = '';
  carModel: string = '';
  carPrice: number = 0;
  carAvailableColors: string[] = [];
  selectedDate: Date = new Date();
  carAvailability: boolean = false;
  colorCount: number[] = [];
  index: number = 0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}
  dateChanged(event: any) {
    this.selectedDate = new Date(event.detail.value);
    console.log(this.selectedDate);
  }

  incrementInput() {
    this.index++;
    this.colorCount.push(this.index);
  }
  save() {
    if (!this.carBrand || !this.carModel || !this.carPrice) {
      this.alertMessage('Failed', 'Please enter valid Inputs');
      return;
    }
    if (Number.isNaN(Number(this.carPrice))) {
      this.alertMessage('Failed', 'Price must be a number');

      return;
    } else {
      const data = {
        carBrand: this.carBrand,
        carModel: this.carModel,
        carPrice: this.carPrice,
        carReleaseDate: this.selectedDate,
        carAvailability: this.carAvailability,
        carAvailableColors: this.carAvailableColors,
      };

      this.dataService
        .addCar(data)
        .then(() => {
          this.presentToast().then(() => {
            setTimeout(() => {
              this.router.navigate(['home']).then(() => {
                window.location.reload();
              });
            }, 2000);
          });
        })
        .catch(() => {
          this.alertMessage('Failed', 'Please try again and check input');
        });
    }
  }
  async alertMessage(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,

      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertLogin() {
    const alert = await this.alertController.create({
      header: 'Creation failed',
      message: 'Please input valid data.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Success! item created',
      color: 'light',
      duration: 2000,
    });
    toast.present();
  }
  async dismissToast() {
    const toast = await this.toastController.getTop();
    if (toast) {
      toast.dismiss();
    }
  }
  back() {
    this.router.navigate(['home']);
  }
}
