import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EventDispatcherService } from './services/event-dispatcher.service';

@Component({
  selector: 'nsv-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
    public name = 'Angular';
    private http: Http;
    private eventDispatchingService: EventDispatcherService;

    constructor(http: Http, dispatcherService: EventDispatcherService) {        
        console.log("AppComponent constructor");
        this.http = http;        
        this.eventDispatchingService = dispatcherService;
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        this.eventDispatchingService.dispatchEvent("appReady");
    }

    public makeCall() { }
}