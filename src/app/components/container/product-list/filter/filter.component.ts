import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.css'
})
export class FilterComponent {
    @Input() public all!: number;
    @Input() public inStock!: number;
    @Input() public outStock!: number;

    @Output() public onFilterChange: EventEmitter<string> = new EventEmitter<string>();

    protected selectedFilter: string = "all";

    protected onFilterChangeEvent = () => {
        this.onFilterChange.emit(this.selectedFilter);

    }
}
