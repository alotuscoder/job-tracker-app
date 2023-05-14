import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-tracker-app';

  drag(ev: any) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }
}
