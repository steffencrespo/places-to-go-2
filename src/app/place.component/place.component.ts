import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'place-component',
  template: `<div class="boxed"> {{place.name}} </div>`
})
export class PlaceComponent {
  @Input() place;
  constructor() {}
}
