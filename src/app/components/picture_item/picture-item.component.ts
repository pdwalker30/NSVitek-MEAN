import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IPictureItem } from '../../types/types'

@Component({
    selector: 'picture-items',
    templateUrl: 'picture-item.component.html',
    styleUrls: ['picture-item.component.scss']
})
export class PictureItemComponent {
   @Input() itemArray: IPictureItem;

    constructor(router: Router) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        const elementRect = element.getBoundingClientRect();
                        const absoluteElementTop = elementRect.top + window.pageYOffset;
                        const middle = absoluteElementTop - (window.innerHeight / 2);
                        window.scrollTo(0, middle);
                    }
                }
            }
        });
    }
}


