import {Component, OnInit} from '@angular/core';
import { PlaceComponent } from "../place.component/place.component";
import { PlacesService } from "../services/places.service";
import { Place } from "../shared/place";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [PlaceComponent],
    providers: [PlacesService]
})

export class AppComponent implements OnInit{
    title = 'Best places to visit';
    places: Place[];

    constructor(private placesService: PlacesService) {}

    ngOnInit() {
        this.getPlaces();
    }

    getPlaces() {
        this.placesService.getPlaces().then(places => this.places = places);
    }
}
