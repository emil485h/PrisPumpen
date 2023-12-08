import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PrisService } from '../services/pris.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/pris.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.page.html',
  styleUrls: ['./forside.page.scss'],
 
})
export class ForsidePage implements OnInit {
  dataFromFirestore: any[];
  selectedSegment: string = 'benzin';
  priser: Observable<any>;
  value95OK: any
  value100: any
  valueDieselOK: any

  value95Q8: any
  value95Ekstra: any
  valueDieselQ8: any


  value95CircleK: any
  value95Plus: any
  valueDieselCircleK: any
  
  
  value95F24: any
  value95PlusF24: any
  valueDieselF24: any


  value95Shell: any
  value99: any
  valueDieselShell: any


  value95Ingo: any
  value98: any
  valueDieselIngo: any
// private prisService: PrisService,
  constructor( private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCollectionData('TankStationer').subscribe(data =>{
      this.dataFromFirestore = data
    })
      // OK database
   
    this.firebaseService.get95ValueFromOKDocument().subscribe(data =>{
      this.value95OK = data['95']
    })
    this.firebaseService.get100ValueFromOKDocument().subscribe(data =>{
      this.value100 = data['100']
    })
    this.firebaseService.getDieselValueFromOKDocument().subscribe(data =>{
      this.valueDieselOK = data['Diesel']
    })

    // Q8 database
  
  this.firebaseService.get95Q8ValueFromQ8Document().subscribe(data =>{
    this.value95Q8 = data['95Q8']
  })
  this.firebaseService.get95EkstraValueFromQ8Document().subscribe(data =>{
    this.value95Ekstra = data['95Ekstra']
  })
  this.firebaseService.getDieselQ8ValueFromQ8Document().subscribe(data =>{
    this.valueDieselQ8 = data['DieselQ8']
  })
  


  // Circle-K database

  this.firebaseService.get95CircleKValueFromCircleKDocument().subscribe(data =>{
    this.value95CircleK = data['95CircleK']
  })
  this.firebaseService.get95PlusValueFromCircleKDocument().subscribe(data =>{
    this.value95Plus = data['95Plus']
  })
  this.firebaseService.getDieselCircleKValueFromCircleKDocument().subscribe(data =>{
    this.valueDieselCircleK = data['DieselCircleK']
  })

  // f24 database

  this.firebaseService.get95F24ValueFromF24Document().subscribe(data =>{
    this.value95F24 = data['95F24']
  })
  this.firebaseService.get95PlusF24ValueFromF24Document().subscribe(data =>{
    this.value95PlusF24 = data['95PlusF24']
  })
  this.firebaseService.getDieselF24ValueFromF24Document().subscribe(data =>{
    this.valueDieselF24 = data['DieselF24']
  })


  // shell database

  this.firebaseService.get95ShellValueFromF24Document().subscribe(data =>{
    this.value95Shell = data['95Shell']
  })
  this.firebaseService.get99ValueFromF24Document().subscribe(data =>{
    this.value99 = data['99']
  })
  this.firebaseService.getDieselShellValueFromF24Document().subscribe(data =>{
    this.valueDieselShell = data['DieselShell']
  })


  // Ingo database

  this.firebaseService.get95IngoValueFromIngoDocument().subscribe(data =>{
    this.value95Ingo = data['95Ingo']
  })
  this.firebaseService.get98ValueFromIngoDocument().subscribe(data =>{
    this.value98 = data['98']
  })
  this.firebaseService.getDieselIngoValueFromIngoDocument().subscribe(data =>{
    this.valueDieselIngo = data['DieselIngo']
  })

}
  navigateToKamera() {
    this.router.navigate(['/kamera']);
  }

 segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }
  

  

}
