import { Component, Input } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent {
  @Input()
  userdata: Data = new Data;
}
