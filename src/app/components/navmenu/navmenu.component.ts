import { Component } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, RequestMethod, URLSearchParams, ResponseContentType, Response, RequestOptions } from '@angular/http';

@Component({
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html',
    styleUrls: ['navmenu.component.scss']
})
export class NavMenuComponent {

    private http: Http;

    constructor(paramHttp: Http) {
        this.http = paramHttp;
    }

    public GetCV() {
        console.log('Getting testfile');
        //this.makeYelpCall();
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        });

        let options = new RequestOptions({ headers: headers });
        options.responseType = ResponseContentType.Blob;

        this.http.get('http://localhost:4040/api/download', options).subscribe((data) => {            
            this.downloadFile(data)
        });
    }

    private downloadFile(data: Response) {
        var blob = new Blob([data.blob()], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        var newWin = window.open(url, "NSVitek CV");
        setTimeout(() => {
            if (!newWin || newWin.closed || typeof newWin.closed == 'undefined') {
                //POPUP BLOCKED
                alert("You have a popup blocker or an adblocker that is affecting the ability to open the CV.  Please disable it, or add an exception for this site in order to view the CV.");
            }
        }, 250);
    }
}
