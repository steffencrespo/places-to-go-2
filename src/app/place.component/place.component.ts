import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'place-component',
  templateUrl: 'place.component.html',
  styleUrls: ['place.component.css']
})
export class PlaceComponent {
  @Input() place;
  constructor() {}
}
