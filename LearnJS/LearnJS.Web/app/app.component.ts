import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

//Component decorator make a class as an Angular component
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
<h2>{{hero.name}}</h2>
<div><label>id: </label>{{hero.id}}</div>
<div><label>name: </label>
<div><input value="{{hero.name}}" placeholder="name"></div>
</div>`
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero = {id: 1, name: 'LiuKe'};
}