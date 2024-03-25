import { Injectable } from '@angular/core';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { collection, doc, getDocs, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore ) { }

  async getLatest() {
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

  async getSingleDevice(devId: string) {
    const docRef = doc(this.firestore, "devices", devId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
}

