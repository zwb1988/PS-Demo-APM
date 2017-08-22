import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; ``
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';

import { IProduct, Product } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .map(products => {
                let filteredProducts = products.filter(product => product.productId === id);
                if (filteredProducts.length > 0) {
                    return filteredProducts[0];
                }
                return this.getDefaultProduct();
            })
            .catch(this.handleError);
    }

    getDefaultProduct(): IProduct {
        return new Product(
            -1,
            '',
            '',
            '',
            0,
            '',
            0,
            ''
        );
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}