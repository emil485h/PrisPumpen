// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// // export class PrisService {
// //   private apiUrl = 'DIN_API_URL';

// //   constructor(private http: HttpClient) {}

// //   getPriser(tankstationId: string): Observable<any> {
// //     return this.http.get(`${this.apiUrl}/priser/${tankstationId}`);
// //   }

// export class PrisService {
//   constructor(private db: AngularFireDatabase) {}

//   getPriser(tankstationId: string): Observable<any> {
//     return this.db.object(`/priser/${tankstationId}`).valueChanges();
//   }
// }
