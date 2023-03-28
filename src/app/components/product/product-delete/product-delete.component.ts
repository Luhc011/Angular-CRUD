import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;


  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.readById(id!).subscribe(product => {
        this.product = product;
      })
  }

  deleteProduct(){
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Product deleted successfully')
      this.router.navigate(['/products']);
    })
  }

  cancel(){
    return this.router.navigate(['/products']);
  }

}
