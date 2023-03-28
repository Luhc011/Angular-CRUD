import { Router } from '@angular/router';
import { ProductService } from '../product.service';

import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  // attributes: string = 'Consoles view'
  // doSomething(): void {
  //   console.log(this.attributes);
  // }

  product: Product  = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ){

  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created successfully')
      this.router.navigate(['products'])


    })


  }
  
  cancelProduct(){
    this.router.navigate(['products'])
  }

}
