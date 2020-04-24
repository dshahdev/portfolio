import { UtilService } from '../util.service';
export class Item {

    // set imageData properties
    id: number;
    product_description: string;
    shipping_details: string;
    customer_reviews: string;
    price: string;
    image_path: string;
    stock_availability: string;
    no_of_items: string;
    songs: string
    image_number: number;

    constructor(obj: any) {
        this.id = UtilService.getNumberOrDefault(obj,"id");
        this.product_description = UtilService.getStringOrDefault(obj, "product_description");
        this.shipping_details = UtilService.getStringOrDefault(obj,"shipping_details");
        this.customer_reviews = UtilService.getStringOrDefault(obj, "customer_reviews");
        this.price = UtilService.getStringOrDefault(obj,"price");
        this.image_path = UtilService.getStringOrDefault(obj, "image_path");
        const res:boolean = UtilService.getBoolOrDefault(obj, "stock_availability");
        if(res === true){
            this.stock_availability= "in-stock";
        } else {
            this.stock_availability = "not-in-stock"
        }
        this.no_of_items = UtilService.getStringOrDefault(obj, "no_of_items");
        this.songs = UtilService.getStringOrDefault(obj, "songs");
        this.image_number = UtilService.getNumberOrDefault(obj,"image_number");
    }
}