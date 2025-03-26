import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    public selectedProduct?: Product;
    @Input() public products: Product[] = [];

    onProductClick(product: Product) {
        console.log(product);
        this.selectedProduct = product;
    }


   
}
