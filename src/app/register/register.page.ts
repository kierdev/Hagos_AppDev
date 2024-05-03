import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../Services/Authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  signup() {
    if (
      this.validatePassword(this.password, this.confirmPassword) &&
      this.validateEmail(this.email)
    ) {
      const user = this.authenticationService
        .signup(this.email, this.password)
        .then((userCredential) => {
          this.alert();
        })
        .catch((err) => {
          this.presentToast('Please enter valid input');
        })
        .finally(() => {
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        });
    }
  }

  validatePassword(password: String, confirmPassword: String): boolean {
    let isValid = false;
    if (password.length < 8) {
      this.presentToast('Password must be longer than 8 characters');
    } else if (password !== confirmPassword) {
      this.presentToast('Password does not match');
    } else {
      isValid = true;
    }
    return isValid;
  }
  validateEmail(email: string) {
    let isValid = false;
    if (!email.includes('@') && !email.includes('.')) {
      this.presentToast('Please input valid email');
    } else {
      isValid = true;
    }
    return isValid;
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'Successfully created account',
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast(err: string) {
    const toast = await this.toastController.create({
      message: err,
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
