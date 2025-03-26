import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { FilterModel } from "../models/filter.model";
import { ProductCategory } from "../constants/product-category.enum";
import { ProductStock } from "../constants/product-stock.enum";

@Injectable()
export class FilterService {
    public onFilterChange: EventEmitter<Product[]> = new EventEmitter<Product[]>;

    public products: Product[] = [];

    public filter(products: Product[], filter: FilterModel): Product[] {
        let filteredProducts: Product[] = [...products];

        if (filter.searchText && filter.searchText.trim() !== "") {
            const search = filter.searchText.toLowerCase();

            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(search));
        }

        if (filter.category && filter.category !== ProductCategory.All) {
            filteredProducts = filteredProducts.filter(product =>
                product.category === filter.category
            );
        }

        if (filter.stock) {
            switch (filter.stock) {
                case ProductStock.InStock:
                    filteredProducts = filteredProducts.filter(product => product.isInInventory);
                    break;
                case ProductStock.OutStock:
                    filteredProducts = filteredProducts.filter(product => !product.isInInventory);
                    break;
            }
        }

        this.onFilterChange.emit(filteredProducts);
        return filteredProducts;
    }
}