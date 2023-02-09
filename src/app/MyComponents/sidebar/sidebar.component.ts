import { Component, Input } from '@angular/core';
import { Data } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() data:Data[] | undefined;
}
