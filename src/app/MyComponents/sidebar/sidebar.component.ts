import { Component, Input } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  data!: Data[];
}
