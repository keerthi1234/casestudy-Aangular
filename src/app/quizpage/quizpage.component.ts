import { Component, OnInit } from '@angular/core';
import  data  from  '../../data/Sports.json';
@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent {
  
  q:string;
  opt1:string;
  opt2:string;
  opt3:string;

  i:number = 0;
 correctCount:number = 0 ;
 index:number;
 
 
  constructor() { }

public start(){
  document.getElementById("qp").style.visibility= "visible";
  document.getElementById("start").style.visibility= "hidden";
  this.generate(0);
}



 public generate(index:number) {
    document.getElementById("q").innerHTML = data[index].q;
    document.getElementById("optt1").innerHTML = data[index].opt1;
    document.getElementById("optt2").innerHTML = data[index].opt2;
    document.getElementById("optt3").innerHTML = data[index].opt3;
}

public checkAnswer() {
    if (document.getElementById("opt1").checked && data[this.i].opt1 == data[this.i].answer) {
       this.correctCount++;
    }
    if (document.getElementById("opt2").checked && data[this.i].opt2 == data[this.i].answer) {
        this.correctCount++;
    }
    if (document.getElementById("opt3").checked && data[this.i].opt3 == data[this.i].answer) {
        this.correctCount++;
    }
    // increment i for next question
    this.i++;
    if(data.length-1 < this.i){
        
        document.write("Your score is : "+this.correctCount+"/"+data.length);
       
    }

    else{
    // callback to generate
    this.generate(this.i);
    }
}


}