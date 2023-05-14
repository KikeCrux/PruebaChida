import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datos-API_OECS';

  data: any;

  constructor(private apiDatosService: ApiDataService) { }

  ngOnInit() {
    this.recuperarDatos();
  }

  recuperarDatos() {
    console.log("Recuperar datos");
    //opcion1
    this.apiDatosService.retornar().subscribe(
      (result: any) => {
        this.data = result;
        console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );
  }
}
