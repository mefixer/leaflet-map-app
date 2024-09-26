import { Component } from '@angular/core';
import { MapComponent } from './map/map.component'; // Importar el componente Map

@Component({
  selector: 'app-root',
  standalone: true, // Hacer standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MapComponent] // Importar el componente en el array de imports
})
export class AppComponent {
  title = 'leaflet-map-app';
}
