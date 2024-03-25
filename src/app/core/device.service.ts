import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore ) { }

  async getDevices() {
    //   return (

   
    //    await getDocs(query(collection(this.firestore, 'devices')))
    //   ).docs.map((devices) => devices.data());
    //  }
    const tempArr: {}[] = []
    const q = query(collection(this.firestore, 'devices'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempArr.push({deviceId: doc.id, ...doc.data()})
    })
    return tempArr;
  }
}

