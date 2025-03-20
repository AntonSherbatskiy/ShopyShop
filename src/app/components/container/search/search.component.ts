import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
})
export class SearchComponent {
    @Output() onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onSearchTextEmpty: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSearchResultChange: EventEmitter<string> = new EventEmitter<string>();
    protected searchText: string = '';
    protected searchResult: string = '';

    protected updateSearchResult(value: string) {
        this.searchResult = value;
        this.onSearchResultChange.emit(value);
    }

    protected changeSearchText($event: any) {
        if ($event.target.value === "") {
            this.onSearchTextEmpty.emit();
            this.searchResult = '';
        }
    }
}

