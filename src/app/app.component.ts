import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
// import {} from 'googlemaps';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit {
//   // google maps zoom level
//   zoom: number = 8;
//   dir = undefined;
//   // initial center position for the map
//   lat: number = 51.673858;
//   lng: number = 7.815982;

//   ngOnInit() {
//     this.dir = {
//       origin: { lat: 24.799448, lng: 120.979021 },
//       destination: { lat: 24.799524, lng: 120.975017 }
//     }
//     console.log(this.dir);

//   }
//   public getDirection() {
//     this.dir = {
//       origin: { lat: 24.799448, lng: 120.979021 },
//       destination: { lat: 24.799524, lng: 120.975017 }
//     }
//   }

//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   mapClicked($event: MouseEvent) {
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng,
//       draggable: true
//     });
//   }

//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }

//   markers: marker[] = [
//     {
//       lat: 51.673858,
//       lng: 7.815982,
//       label: 'A',
//       draggable: true
//     },
//     {
//       lat: 51.373858,
//       lng: 7.215982,
//       label: 'B',
//       draggable: false
//     },
//     {
//       lat: 51.723858,
//       lng: 7.895982,
//       label: 'C',
//       draggable: true
//     }
//   ]
// }

// // just an interface for type safety.
// interface marker {
//   lat: number;
//   lng: number;
//   label?: string;
//   draggable: boolean;
// }
export class AppComponent {
  isEdit = false;
  markerOptions = {
    origin: {
      draggable: false,
    },
    destination: {
      draggable: false,
    },
  }
  renderOptions = {
    suppressMarkers: true,
  }


  lat: Number = 40.211657003508144
  lng: Number = -8.44309341946412

  origin = { lat: 40.211657003508144, lng: -8.44309341946412 }
  destination = { lat: 40.166210298703, lng: -8.87219589987565 }
  waypoints = [
    //  {location: { lat: 39.0921167, lng: -94.8559005 }},
    //  {location: { lat: 41.8339037, lng: -87.8720468 }}
  ]

  enableEdit() {
    this.isEdit = true;
    this.markerOptions = {
      ...this.markerOptions,
      origin: {
        draggable: false,
      },
      destination: {
        draggable: true,
      }
    };
  }

  onChange(event: any) {
    console.log(event);
    // You can do anything.
  }

  onOriginDrag(event: any) {
    console.log('origin', event);
  }

  onDestinationDrag(event: any) {
    console.log('destination', event);
  }
}