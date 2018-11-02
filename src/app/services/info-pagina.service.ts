import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  infoCargada = false;

  constructor(private http: HttpClient) {
    // Leer archivo Json
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.infoCargada = true;
        this.info = resp;

        console.log(resp);
      });
  }
}
