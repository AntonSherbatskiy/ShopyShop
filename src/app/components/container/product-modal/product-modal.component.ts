import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from "../../../models/product.model";

@Component({
    selector: 'app-product-modal',
    templateUrl: './product-modal.component.html',
    styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
    @Input() public product?: Product;
    @Output() public onCloseModalEvent: EventEmitter<Product> = new EventEmitter<Product>();

    protected quantity: number = 0;

    closeModal($event?: MouseEvent) {
        this.onCloseModalEvent.emit(this.product);
        this.product = undefined;
    }

    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }

    increaseQuantity() {
        this.quantity++;
    }
}
