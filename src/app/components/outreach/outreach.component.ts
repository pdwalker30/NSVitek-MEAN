import { Component } from '@angular/core';
//import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, ResponseContentType, Response, RequestOptions } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { IPictureItem } from '../../types/types';
import { PictureItemsService } from '../../services/picture-items.service';

@Component({
    selector: 'outreach',
    templateUrl: 'outreach.component.html',
    styleUrls: ['outreach.component.scss']
})
export class OutreachComponent {
    public pictureItems: IPictureItem[] = [];
    private hasFragment: boolean = false;
    private fragment: string = '';

    constructor(router: Router, pictureItemsService: PictureItemsService) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    this.hasFragment = true;
                    this.fragment = tree.fragment;
                }
            }
        });

        this.pictureItems = pictureItemsService.getOutreachItems();
    }

    public ngAfterViewInit(){
        if(this.hasFragment){
            const element = document.querySelector("#" + this.fragment);
                    if (element) {
                        const elementRect = element.getBoundingClientRect();
                        const absoluteElementTop = elementRect.top + window.pageYOffset;
                        const middle = absoluteElementTop - (window.innerHeight / 2);
                        window.scrollTo(0, middle);
                    }
        }
    }
}