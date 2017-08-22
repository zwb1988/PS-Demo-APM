import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Product } from './product';
import { ProductService } from "./product.service";

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {
        this.product = this._productService.getDefaultProduct();
    }

    ngOnInit(): void {
        console.log(this._route.snapshot.params);
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}:`;
        this._productService.getProduct(id)
            .subscribe(product => {
                this.product = product
            });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}