import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductStock } from '../../../../constants/product-stock.enum';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css'
})
export class FilterComponent {
    @Input() public all!: number;
    @Input() public inStock!: number;
    @Input() public outStock!: number;

    @Output() public onFilterChange: EventEmitter<ProductStock> = new EventEmitter<ProductStock>();

    protected productStock = ProductStock;

    protected selectedFilter: ProductStock = ProductStock.All;

    protected onFilterChangeEvent = () => {
        this.onFilterChange.emit(this.selectedFilter);
    }
}
