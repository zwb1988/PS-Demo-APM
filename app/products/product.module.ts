import { NgModule } from '@angular/core';
import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { RouterModule } from "@angular/router";
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },  
            { path: 'product/:id', component: ProductDetailComponent, 
              canActivate:[ProductGuardService] },
        ]),
        SharedModule
    ],
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        ProductGuardService
    ]
})
export class ProductModule { }