import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../Services/Authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async login() {
    this.authenticationService
      .login(this.email, this.password)
      .then((userCredential) => {
        const user = userCredential;
        this.authenticationService.setAuthentication(true);
        this.alertLogin();
      })
      .catch(() => {
        this.presentToast();
      })
      .finally(() => {
        this.email = '';
        this.password = '';
      });
  }
  async alertLogin() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'You are successfuly login',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['home']);
          },
        },
      ],
    });

    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed. Please try again',
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
