import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router){

}
  
  onSubmit(value:any){
    console.log(value)
    if(value){
      console.log(value)
      if(value.username=="manish" && value.password=="asdf"){
         this.router.navigate(["home"])    
      console.log("insside if")
      }
    }

  }

}
