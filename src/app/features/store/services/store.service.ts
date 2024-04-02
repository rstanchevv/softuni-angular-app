import { Injectable } from '@angular/core';
import { Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async getAllDeivces() {
    const tempArr: {}[] = [];
    const q = query(collection(this.firestore, 'devices'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempArr.push({ deviceId: doc.id, ...doc.data() });
    });
    return tempArr;
  }

  async getSingleDevice(devId: string) {
    const docRef = doc(this.firestore, 'devices', devId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async buyDevice(devId: string) {
    const docRef = doc(this.firestore, 'devices', devId);
    const docSnap = await getDoc(docRef);
    const currentDoc = docSnap.data();
    setDoc(docRef, { ...currentDoc, isBought: true, boughtBy: this.authService.user?.user.uid });
  }

  async createDevice(
    name: string,
    details: string,
    img: string,
    price: string,
    ownerId: string,
  ) {
    await setDoc(doc(collection(this.firestore, 'devices')), {
      name,
      details,
      img,
      price,
      ownerId,
      isBought: false,
      boughtBy: ''
    });
  }

  async editDevice(id: string, newValuesObj: {} ){
    const currentDevice = doc(this.firestore, 'devices', id);
    await updateDoc(currentDevice, newValuesObj)
  }

  async deleteDevice(id: string) {
    await deleteDoc(doc(this.firestore, 'devices', id));
  }
}
