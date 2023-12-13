import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, } from '@angular/forms'
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 regForm : FormGroup;
  constructor(public route: Router, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AuthenticationService, public router : Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
       fullname:['',[Validators.required]],
       email: ['',[
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password:['',[
      Validators.required,
      Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[0-8])(?=.*[A-Z]).{8,}")
    ]]

    })
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
      })
      if(user){
        loading.dismiss()
        this.route.navigate(['/forside'])

      }else{
        console.log('provide correct values')
      }
    }
  }
}
