import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  option: string;

data = [
{id: 0, name: 'Movies'},
{id: 1, name: 'Sports'},
{id: 2, name: 'Music'}
];




loadQuiz(topic:string){
  this.option = topic;
  alert('You have selected ' + this.option + ' topic');
    this.router.navigate(['/quizpage']);
    
  }
   
  ngOnInit() {
  }

}
