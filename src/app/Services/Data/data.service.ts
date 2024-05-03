import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Car } from 'src/app/Model/car.model';
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private alertController: AlertController) {}

  app = initializeApp(environment.firebaseConfig);
  firestore = getFirestore(this.app);

  async getCar(id: any) {
    const docRef = doc(this.firestore, 'Cars', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }

  async getAllCars() {
    const cars: Car[] = [];

    const querySnapshot = await getDocs(collection(this.firestore, 'Cars'));
    querySnapshot.forEach((doc) => {
      const data = doc.data() as Car;
      data.id = doc.id;
      cars.push(data);
    });
    return cars;
  }
  async addCar(car: any) {
    return await addDoc(collection(this.firestore, 'Cars'), {
      carBrand: car.carBrand,
      carModel: car.carModel,
      carReleaseDate: car.carReleaseDate,
      carPrice: car.carPrice,
      carAvailability: car.carAvailability,
      carAvailableColors: car.carAvailableColors,
    });
  }

  async deleteCar(car: Car) {
    try {
      const docRef = doc(this.firestore, 'Cars', car.id);
      await deleteDoc(docRef);
      location.reload();
      console.log(`${car.id} is deleted`);
    } catch (error) {
      console.log(error);
    }
  }

  async updateCar(car: Car) {
    try {
      const docRef = doc(this.firestore, 'Cars', car.id);
      await updateDoc(docRef, {
        carBrand: car.carBrand,
        carModel: car.carModel,
        carPrice: car.carPrice,
        carAvailability: car.carAvailability,
        carReleaseDate: car.carReleaseDate,
        carAvailableColors: car.carAvailableColors,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
