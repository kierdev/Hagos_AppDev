import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  fetchData(authenticate: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      if (authenticate) {
        setTimeout(() => {
          resolve('Data fetched successfully');
        }, 2000);
      } else {
        setTimeout(() => {
          reject('Authentication failed');
        }, 2000);
      }
    });
  }
}
  
  // fetchData() {
  // return new Promise((resolve, reject) => {
  //   const errorCondition = false;
    
  //   if (errorCondition) {
  //     reject(new Error('Failed to fetch data'));
  //   } else {
  //     setTimeout(() => {
  //       resolve('Nice');
  //     }, 5000)
  //   }
  // });



