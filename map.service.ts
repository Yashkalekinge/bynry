import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map: google.maps.Map;

  constructor() { }

  initializeMap(mapElement: HTMLElement, latitude: number, longitude: number): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 12
    };
    this.map = new google.maps.Map(mapElement, mapOptions);
  }

  addMarker(latitude: number, longitude: number): void {
    new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map
    });
  }
}