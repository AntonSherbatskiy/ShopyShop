import { Component, Input, OnInit } from '@angular/core';
import { Gender, Product } from "../../../models/product.model";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    onProductClick(product: Product) {
        console.log(product);
        this.selectedProduct = product;
    }
    constructor(private client: HttpClient) {

    }

    ngOnInit(): void {
        this.client.get<any[]>('assets/result.json')
            .subscribe(data => {
                this.products = data.map(Product.fromJson);
            });
    }

    protected products!: Product[];

    private selectedFilter: string = "all";
    public selectedProduct?: Product;

    @Input() public searchText: string = "";

    protected getInStockCount = (): number => {
        return this.products.filter(p => p.isInInventory).length;
    }

    protected getOutStockCount = (): number => {
        return this.products.filter(p => !p.isInInventory).length;
    }

    protected getFilteredProducts = (): Product[] => {
        if (this.selectedFilter === "all") {
            return this.products;
        }

        if (this.selectedFilter === "inStock") {
            return this.products.filter(p => p.isInInventory);
        }

        return this.products.filter(p => !p.isInInventory);
    }

    protected onFilterChange(event: string) {
        this.selectedFilter = event;
    }
}
