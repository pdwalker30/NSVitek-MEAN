import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, ResponseContentType, Response, RequestOptions } from '@angular/http';
import { Subject } from "rxjs/Rx";
import { OrcidInterfaces } from '../types/types';

@Injectable()
export class MTService {

    private http: Http = null;

    constructor(ngHttp: Http) {
        this.http = ngHttp;
    }

    public getOrcidData(): Subject<OrcidInterfaces.IOrcidInformation> {
        let orcidUrl = 'https://pub.orcid.org/v2.1/0000-0003-0587-8907/works';

        let returnSubj = new Subject<OrcidInterfaces.IOrcidInformation>();
        let headers = new Headers({            
            'Accept': 'application/json'
        });

        let options = new RequestOptions({ headers: headers });

        //this.http.get('/api/Data/GetPublications', options).subscribe((data) => {            
        //    returnSubj.next(data.json());
        //});

        this.http.get('https://pub.orcid.org/v2.1/0000-0003-0587-8907/works', options).subscribe((data: any) => {
            let allWorksArray: string = "";
            let returnedJson = data.json();

            console.log("data retrieved: " + JSON.stringify(returnedJson));

            for (let workItem of returnedJson["group"]) {
                //console.log(`workItem: ${JSON.stringify(workItem)}`);

                let putcode = workItem["work-summary"][0]["put-code"];
                //console.log(`putcode: ${JSON.stringify(putcode)}`);

                allWorksArray += putcode + ",";
            }

            console.log("allWorksArray: " + JSON.stringify(allWorksArray));

            this.http.get('https://pub.orcid.org/v2.1/0000-0003-0587-8907/works/' + allWorksArray, options).subscribe((data) => {
                let returnedWorkDetails = data.json();
                console.log(`workDetails: ${JSON.stringify(returnedWorkDetails)}`);

                returnedWorkDetails["bulk"].sort((a, b) => { return <number>b["work"]["publication-date"]["year"]["value"] - <number>a["work"]["publication-date"]["year"]["value"]});

                let publicationTypes = this.setupPublicationTypes(returnedWorkDetails);
                console.log(`publication types: ${JSON.stringify(publicationTypes)}`);

                let orcidWorksGroup: OrcidInterfaces.IOrcidWorkGrouping[] = new Array();

                for (let workType of publicationTypes) {
                    let currentGrouping: OrcidInterfaces.IOrcidWork[] = new Array();

                    for (let workDetailItem of returnedWorkDetails["bulk"]) {
                        if (workDetailItem.work.type === workType) {
                            let pubYear: number = 0;
                            let title: string = '';
                            let journalTitle: string = '';

                            try {
                                pubYear = workDetailItem["work"]["publication-date"]["year"]["value"];
                            }
                            catch(err) {
                                console.warn(`no publication year`);
                            }

                            try {
                                title = workDetailItem.work.title.title.value;
                            }
                            catch (err) {
                                console.warn(`no title`);
                            }

                            try {
                                journalTitle = workDetailItem["work"]["journal-title"]["value"];
                            }
                            catch (err) {
                                journalTitle = null;
                                console.warn(`no journalTitle`);
                            }

                            //Is there a doi?
                            let doiString = (workDetailItem["work"]["external-ids"]["external-id"].length > 0
                                && workDetailItem["work"]["external-ids"]["external-id"][0]["external-id-type"] === "doi")
                                ? workDetailItem["work"]["external-ids"]["external-id"][0]["external-id-value"]
                                : null;

                            //Is there a URL?
                            let urlString = (workDetailItem["work"]["url"] !== null && workDetailItem["work"]["url"] !== undefined && workDetailItem["work"]["url"]["value"] !== null && workDetailItem["work"]["url"]["value"] !== undefined)
                                ? workDetailItem["work"]["url"]["value"]
                                : null;

                            console.log(`details - pubYear:[${pubYear}] title:[${title}] journalTitle:[${journalTitle}] doiString:[${doiString}] urlString:[${urlString}]`);
                            currentGrouping.push(new OrcidWork(pubYear, title, journalTitle, doiString, urlString));
                        }
                    }

                    let currentWorkGroup = new OrcidGroup(currentGrouping, workType);
                    orcidWorksGroup.push(currentWorkGroup);
                }
                
                let orcidListing = new OrcidListing(orcidWorksGroup);

                returnSubj.next(orcidListing);

            });
        });

        return returnSubj;
    }

    public downloadCV(): void {
        console.log('Getting CV');
                
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        });

        let options = new RequestOptions({ headers: headers });
        options.responseType = ResponseContentType.Blob;

        this.http.get('/api/Data/GetCV', options).subscribe((data) => {
            console.log(data);
            this.downloadFile(data)
        });
    }

    private downloadFile(data: Response) {
        var blob = new Blob([data.blob()], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
    private setupPublicationTypes(data): string[] {
        let publicationTypes: string[] = new Array();

        var lookup = {};
        var items = data["bulk"];        

        for (var item, i = 0; item = items[i++];) {
            var name = item["work"]["type"];

            if (!(name in lookup)) {
                lookup[name] = 1;
                publicationTypes.push(name);
            }
        }


        return publicationTypes;
    }

}

export class OrcidListing implements OrcidInterfaces.IOrcidInformation {
    public works: OrcidInterfaces.IOrcidWorkGrouping[] = null;
    constructor(orcidWorksGroup: OrcidInterfaces.IOrcidWorkGrouping[]) {
        this.works = orcidWorksGroup;
    }
}

export class OrcidGroup implements OrcidInterfaces.IOrcidWorkGrouping {
    public grouping: OrcidInterfaces.IOrcidWork[] = null;
    public workType: string = "";

    constructor(orcidWorksArray: OrcidInterfaces.IOrcidWork[], workType: string) {
        this.workType = workType;
        this.grouping = orcidWorksArray;
    }
}

export class OrcidWork implements OrcidInterfaces.IOrcidWork {
    public publicationYear: number;
    public title: string;
    public journalTitle: string;
    public doiString: string = null;
    public url: string = null;

    constructor(pubYear: number, title: string, journalTitle?: string, doiString?: string, url?: string) {
        this.publicationYear = pubYear;
        this.title = title;
        this.journalTitle = journalTitle;
        this.doiString = doiString;
        this.url = url;
    }
}