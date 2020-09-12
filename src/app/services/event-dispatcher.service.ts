import { DOCUMENT } from "@angular/common";
import { Injectable, Inject } from "@angular/core";

@Injectable()
export class EventDispatcherService {

    private _document: Document;
    private appReady: boolean;

    constructor( @Inject(DOCUMENT) document: any) {
        this._document = document;
    }

    public dispatchEvent(paramEventType: string): void {
        let bubbling: boolean = true;
        let cancelable: boolean = false;

        this._document.dispatchEvent(this.createEvent(paramEventType, bubbling, cancelable));
    }

    public createEvent(eventType: string, bubbleToDocument: boolean, cancelable: boolean): Event {
        let customEvent: CustomEvent = null;

        try {

            customEvent = new CustomEvent(eventType, { bubbles: bubbleToDocument, cancelable: cancelable });

        }
        catch (error) {

            customEvent = this._document.createEvent("CustomEvent");
            customEvent.initCustomEvent(eventType, bubbleToDocument, cancelable, null);

        }

        return customEvent;
    }

    public listenForEvent(eventType: string, handleEvent: Function){
        this._document.addEventListener(eventType, handleEvent(eventType));
    }
}