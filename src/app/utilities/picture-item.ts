import { IPictureItem } from "../types/types";


export class PictureItem implements IPictureItem {
    public itemId: string;
    public itemBackgroundImage: string;
    public itemHeader: string;
    public itemText: string;
    public showLeft: boolean;
    public showRight: boolean;

    constructor(elementID: string, backgroundImage: string, header: string, text: string, pictureSide: string){
        this.itemId = elementID;
        this.itemBackgroundImage = backgroundImage;
        this.itemHeader = header;
        this.itemText = text;
        if (pictureSide === "showLeft"){
            this.showLeft = true;
        }
        else {
            this.showRight = true;
        }
    }
}