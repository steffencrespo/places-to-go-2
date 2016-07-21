import { Injectable } from "@angular/core";
import { PLACES } from '../shared/mock-places';

@Injectable()
export class PlacesService {
    getPlaces() {
        return Promise.resolve(PLACES);
    }
}
