import { Component, Input } from "@angular/core";
import { Data } from "src/app/data";

@Component({
  selector: 'app-data-area',
  templateUrl: './data-area.component.html',
  styleUrls: ['./data-area.component.css']
})
export class DataAreaComponent {
  @Input()
  data!: Data[];
}
