import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  cmon = 'this is not fair';
  selectedLevel1: string;



  data = [
      {id: 0, name: 'Movies'},
      {id: 1, name: 'Sports'},
      {id: 2, name: 'music'}
  ];

  con = ['movies','sports','music'];

  option: string;
  taking(inputval: any) {

    this.option = this.selectedLevel1;

  }

/*taking(){
  console.log("you have selected : ", selectedLevel);
}
*/
  ngOnInit() {
  }

}
