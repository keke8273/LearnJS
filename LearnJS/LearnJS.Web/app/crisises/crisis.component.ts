import {Component, OnInit} from 'angular2/core'
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisService} from './crisis.service';
import {CrisisFormComponent} from './crisis-form.component';
import {CrisisListComponent} from './crisis-list.component';

@Component({
    selector: 'crisises',
    template: `
        <router-outlet></router-outlet>    
    `,
    directives: [RouterOutlet],
    providers: [CrisisService]
})
@RouteConfig([
    { path: '/',    name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true },
    { path: '/:sn', name: 'CrisisDetail', component: CrisisFormComponent }
])
export class CrisisComponent{
}