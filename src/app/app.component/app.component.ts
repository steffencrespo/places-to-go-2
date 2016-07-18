import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Best places to visit';
  places: Array<any> = [
    {
      "name": "Loló",
      "points": "322",
      "url": "www.lolosf.com"
    },
    {
      "name": "Fernando from service",
      "points": "207",
      "url": "www.google.com"
    },
    {
      "name": "Somewhere from service",
      "points": "219",
      "url": "www.google.com"
    },
    {
      "name": "So So from service",
      "points": "320",
      "url": "www.google.com"
    },
    {
      "name": "Nich Hier from service",
      "points": "190",
      "url": "www.google.com"
    }
  ]
}
