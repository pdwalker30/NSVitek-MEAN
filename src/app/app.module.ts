import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

//COMPONENTS
import { AppComponent }  from './app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ResearchComponent } from './components/research/research.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { OutreachComponent } from './components/outreach/outreach.component';
import { PictureItemComponent } from './components/picture_item/picture-item.component';
import { PublicationsComponent } from './components/publications/publications.component';

//SERVICES
import { MTService } from './services/mt.service';
import { EventDispatcherService } from './services/event-dispatcher.service';
import { PictureItemsService } from './services/picture-items.service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        ResearchComponent,
        ResourcesComponent,
        HomeComponent,
        ContactComponent,
        OutreachComponent,
        PictureItemComponent,
        PublicationsComponent
    ],
    providers: [
        MTService,
        EventDispatcherService, 
        PictureItemsService
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'research', component: ResearchComponent },
            { path: 'resources', component: ResourcesComponent },
            { path: 'publications', component: PublicationsComponent },
            { path: 'outreach', component: OutreachComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
