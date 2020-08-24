import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  product

  constructor(
    private route: ActivatedRoute,
    private productServise: ProductService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      // this.product = products[+param.get('productId')];
      this.product = this.productServise.getproductById(+param.get('productId'))
    })
  }

}
