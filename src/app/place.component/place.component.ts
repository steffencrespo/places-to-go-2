import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'place-component',
  template: `<td class="place-name">{{place.name}}</td>
      <td class="place-url">{{place.url}}</td>
      <td class="place-rating">{{place.points}}</td>`
})
export class PlaceComponent {
  @Input() place;
  constructor() {}
}
