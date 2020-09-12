import { Component } from '@angular/core';
import { PictureItemsService } from '../../services/picture-items.service';
import { IPictureItem } from '../../types/types';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    public researchItems: IPictureItem[] = [];
    public outreachItems: IPictureItem[] = [];
    public peopleItems: IPictureItem[] = [];

    constructor(pictureItemService: PictureItemsService) {
        this.researchItems = pictureItemService.getResearchItems();
        this.outreachItems = pictureItemService.getOutreachItems();
        this.peopleItems = pictureItemService.getLabPeopleItems();
    }
}