import { Component, OnInit } from '@angular/core';
import  data  from  '../../data/login.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username:string;
  password:string;
  errormsg:string;

constructor(private router: Router) { }

public onLoginClick()
{
  console.log('keerthi');
   for(let i in data)
   {
     console.log(typeof(parseInt(i))+'******************')
    console.log(i+'@@@@@@@@'+this.username +' '+this.password+ data[i].username);

    if(this.username == data[i].username && this.password == data[i].password)
    {
        console.log('logged in');
        this.router.navigate(['/homepage']);
        break;
    }

    if(parseInt(i)<= data.length){

      alert('Please enter valid credentials');

    }

      
}


} 

}
