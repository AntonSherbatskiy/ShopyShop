import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() product!: Product;

    protected getDiscountPercentage = (): number => {
        if (this.product.discountPrice) {
            return (this.product.discountPrice / this.product.price) * 100;
        }

        return 0;
    }
}
