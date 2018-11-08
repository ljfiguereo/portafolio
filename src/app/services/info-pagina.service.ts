import { log } from 'util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  infoCargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();

    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer archivo Json
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.infoCargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-portafolio-4533c.firebaseio.com/equipo.json')
      .subscribe((data: any[]) => {
        this.equipo = data;
      });
  }
}
