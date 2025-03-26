import { Component, inject, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterModel } from '../../models/filter.model';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { ProductCategory } from '../../constants/product-category.enum';
import { ProductStock } from '../../constants/product-stock.enum';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {
    onStockChange(stock: ProductStock) {
        this.filter.stock = stock;
    }
    protected filterService: FilterService = inject(FilterService);
    protected client: HttpClient = inject(HttpClient);

    protected filter: FilterModel = { searchText: '', category: ProductCategory.All, stock: ProductStock.All };

    protected products: Product[] = [];

    protected get filteredProducts(): Product[] {
        return this.filterService.filter(this.products, this.filter);
    }

    getOutStockCount(): number {
        return this.filteredProducts.filter(p => !p.isInInventory).length;
    }

    getInStockCount(): number {
        return this.filteredProducts.filter(p => p.isInInventory).length;
    }

    protected updateSearchText(value: string) {
        this.filter.searchText = value;
        this.performFiltering();
    }

    protected clearSearchText() {
        this.filter.searchText = "";
    }

    onCategoryChange(category: string) {
        this.performFiltering();
    }

    ngOnInit(): void {
        this.client.get<any[]>('assets/result.json')
            .subscribe(data => {
                this.products = data.map(Product.fromJson);
            });
    }

    private performFiltering() {
        this.filterService.filter(this.products, this.filter);
    }
}
