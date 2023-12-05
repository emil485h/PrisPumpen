import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PrisService } from '../services/pris.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.page.html',
  styleUrls: ['./forside.page.scss'],
 
})
export class ForsidePage implements OnInit {
  selectedSegment: string = 'benzin';
  priser: Observable<any>;
// private prisService: PrisService,
  constructor( private router: Router) { }

  ngOnInit() {
    // const tankstationId = 'DIN_TANKSTATION_ID';
    // this.priser = this.prisService.getPriser(tankstationId);
  }

  navigateToKamera() {
    this.router.navigate(['/kamera']);
  }

 segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }
  

  

}
