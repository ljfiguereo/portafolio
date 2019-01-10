import { ProductoInterface } from './../interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrados: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      const url = 'https://angular-portafolio-4533c.firebaseio.com/productos_idx.json';
      this.http.get(url).subscribe((data: ProductoInterface[]) => {
        this.productos = data;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProducto(id: string) {
    const url = 'https://angular-portafolio-4533c.firebaseio.com/productos/';
    return this.http.get(`${url}${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // Cargar productos
      this.cargarProductos().then(() => {
        // Ejecutar despues tener productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      // Aplicar el Filtro
      this.filtrarProductos(termino);
    }
    console.log(this.productosFiltrados);
  }

  private filtrarProductos(termino: string) {
    termino = termino.toLowerCase();
    this.productosFiltrados = [];
    this.productos.forEach(prod => {
      if (
        prod.categoria.toLowerCase().indexOf(termino) >= 0 ||
        prod.titulo.toLowerCase().indexOf(termino) >= 0
      ) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
