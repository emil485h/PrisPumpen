import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  email:any

  constructor(public route:Router, public authService:AuthenticationService) { 
 }

  ngOnInit() {
  }

  async resetPassword (){
    this.authService.resetPassword(this.email).then(()=>{
     console.log('Reset link sent');
    this.route.navigate(['/login']) 
    }
    
    ).catch((error)=>{
      console.log(error)
    })

  }

}  


