import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.page.html',
  styleUrls: ['./forside.page.scss'],
 
})
export class ForsidePage implements OnInit {
  selectedSegment: string = 'default';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToKamera() {
    this.router.navigate(['/kamera']);
  }

 segmentChanged(event) {
    this.selectedSegment = event.detail.value;
  }
  

  

}
