import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/Data/data.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Car } from '../Model/car.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  carList: Car[] = [];
  id: any;
  // temporary data types and will be converted later
  carBrand: string = '';
  carModel: string = '';
  carPrice: number = 0;
  carAvailableColors: [] = [];
  selectedDate: Date = new Date();
  carAvailability: boolean = false;
  colorCount: number[] = [];
  index: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.initialize();
  }

  initialize() {
    this.dataService
      .getAllCars()
      .then((data) => {
        this.carList = data;
        this.carList.forEach((car) => {
          if (car.id === this.id) {
            this.syncData(car);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  back() {
    this.router.navigate(['home']);
  }

  syncData(car: Car) {
    this.carBrand = car.carBrand;
    this.carModel = car.carModel;
    this.carPrice = car.carPrice;
    this.carAvailability = car.carAvailability;
    this.carAvailableColors = car.carAvailableColors;
    this.selectedDate = car.carReleaseDate;
  }

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
        id: this.id,
        carBrand: this.carBrand,
        carModel: this.carModel,
        carPrice: this.carPrice,
        carReleaseDate: this.selectedDate,
        carAvailability: this.carAvailability,
        carAvailableColors: this.carAvailableColors,
      };

      this.dataService
        .updateCar(data)
        .then(() => {
          this.alertMessage('Success!', 'item added');
          setTimeout(() => {
            this.router.navigate(['home']).then(() => {
              window.location.reload();
            });
          }, 1500);
        })
        .catch(() => {
          this.alertMessage('Failed', 'Please enter valid input');
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
}
