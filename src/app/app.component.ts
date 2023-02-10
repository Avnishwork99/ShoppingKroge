import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingKroge??';
  navbar = "ShoppingKroge!!";
  data:Data[] | undefined;
  constructor(){
    this.data=[
      {
        sno:1,
        name:"Avnish",
        title:"Kumar"
      },
      {
        sno:2,
        name:"Varun",
        title:"Kumar"
      },
      {
        sno:2,
        name:"Avinash",
        title:"Chauhan"
      },
    ]
  }
}
