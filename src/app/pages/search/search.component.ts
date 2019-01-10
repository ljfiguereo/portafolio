import { ProductosService } from './../../services/productos.service';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['termino']);
      this.productosService.buscarProducto(params['termino']);
    });
  }
}
