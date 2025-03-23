export enum Gender {
    Men = "Men",
    Women = "Women"
}

export class Product {
    category!: string;
    name!: string;
    description!: string;
    price!: number;
    oldPrice?: number;
    imageUrl!: string;
    discountPrice?: number;
    isInInventory!: boolean;
    gender?: Gender;

    public static fromJson(obj: any): Product {
        let gender!: Gender;

        if (obj.gender === 'men') {
            gender = Gender.Men
        } else {
            gender = Gender.Women
        }
        


        return {
            category: obj.category,
            name: obj.name,
            description: obj.description,
            price: obj.price,
            imageUrl: obj.image_url,
            isInInventory: obj.in_stock === 'true',
            oldPrice: obj.old_price,
            discountPrice: obj.discount_price,
            gender: gender
        };
    }
}
