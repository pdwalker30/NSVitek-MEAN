import { Component } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, ResponseContentType, Response, RequestOptions } from '@angular/http';
import { MTService } from '../../services/mt.service';
import { Observable, Subscription } from "rxjs/Rx";
import { OrcidInterfaces } from '../../types/types';

@Component({
    selector: 'publications',
    templateUrl: 'publications.component.html',
    styleUrls: ['publications.component.scss']
})
export class PublicationsComponent {

    public http: Http = null;
    public mtService: MTService;
    public orcidData: OrcidInterfaces.IOrcidInformation;
    /*
     {
        works: [{
            workType: "default",
            grouping: [{
                publicationYear: 0,
                title: '',
                journalTitle: '',
                doiString: '',
                url: ''
            }]
        }]
    }
    */
    public doiUrl: string = "http://dx.doi.org/";
    public busy: boolean = true;

    constructor(middleTier: MTService) {
        this.mtService = middleTier;

        this.mtService.getOrcidData().subscribe((data: OrcidInterfaces.IOrcidInformation) => {
            this.orcidData = data;
            this.busy = false;            
        });
    }

    public downloadCV() {
        this.mtService.downloadCV();
    }
}
