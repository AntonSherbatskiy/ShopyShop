import { ProductCategory } from "../constants/product-category.enum";
import { ProductStock } from "../constants/product-stock.enum";

export type FilterModel = {
    searchText: string;
    category: ProductCategory;
    stock: ProductStock;
};