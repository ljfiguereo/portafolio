import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interface';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  productoId: string;

  constructor(
    public route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.productoService
        .getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          this.producto = producto;
          this.productoId = parametros['id'];
        });
    });
  }
}
