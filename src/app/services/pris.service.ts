// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getCollectionData(collectionName: string) {
    return this.firestore.collection(collectionName).valueChanges();
  }
// Ok tankstation
  get95ValueFromOKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('OK').valueChanges();
  }
  get100ValueFromOKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('OK').valueChanges();
  }
  getDieselValueFromOKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('OK').valueChanges();
  }

//   Q8 tankstation
get95Q8ValueFromQ8Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Q8').valueChanges();
  }
  get95EkstraValueFromQ8Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Q8').valueChanges();
  }
  getDieselQ8ValueFromQ8Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Q8').valueChanges();
  }



get95CircleKValueFromCircleKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('CircleK').valueChanges();
  }
  get95PlusValueFromCircleKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('CircleK').valueChanges();
  }
  getDieselCircleKValueFromCircleKDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('CircleK').valueChanges();
  }


get95F24ValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('F24').valueChanges();
  }
  get95PlusF24ValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('F24').valueChanges();
  }
  getDieselF24ValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('F24').valueChanges();
  }



get95ShellValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Shell').valueChanges();
  }
  get99ValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Shell').valueChanges();
  }
  getDieselShellValueFromF24Document(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Shell').valueChanges();
  }


get95IngoValueFromIngoDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Ingo').valueChanges();
  }
  get98ValueFromIngoDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Ingo').valueChanges();
  }
  getDieselIngoValueFromIngoDocument(): Observable<any> {
    return this.firestore.collection('TankStationer').doc('Ingo').valueChanges();
  }
  // Andre Firestore-operationer...
}