import {Component} from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css'
})
export class ContainerComponent {
    protected searchText: string = '';

    protected updateSearchText(value: string) {
        this.searchText = value;
    }

    protected clearSearchText() {
        this.searchText = "";
    }
}
