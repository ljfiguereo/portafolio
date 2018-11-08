import { ProductoInterface } from './../interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get('https://angular-portafolio-4533c.firebaseio.com/productos_idx.json')
      .subscribe((data: ProductoInterface[]) => {
        this.productos = data;

        this.cargando = false;
      });
  }
}
