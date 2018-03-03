import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { regService} from '../../../services/reg.services' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password : string ;
  email : string ;
  users: LocalDataSource=new LocalDataSource();

  constructor(private regService:regService ) { }

  add(){
    var userob =  {
      email:this.email,
      password:this.password
}
var flag;

      this.regService.LogIn(userob).subscribe(Response=>{  
        window.location.href="#../dashboard"

        setTimeout(function() { alert("Logged in"); }, 5);
        // lw dakhl hna m3naha en logged fa lw 3ayz tktb code 3la asas eni logged in ektbo hna 
        window.sessionStorage.email= this.email;
        flag='b';
        window.location.reload();

        console.log(window.sessionStorage.email);

  });
  setTimeout(function() { if(flag=='b'){
      
  }
  else{
    alert("You Entered wrong data");
  }
     }, 1000);

//setTimeout(function() { alert("You Entered wrong data"); }, 5);


//console.log(this.users)
  //setTimeout(function() { alert("You Entered wrong data"); }, 5);
  

  //console.log(this.users)
  }

  ngOnInit() {
  }

}
