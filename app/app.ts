/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/Home';
import {UserDetails} from './components/user-details/UserDetails';
import {Statistics} from './components/statistics/Statistics';

@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/users/:name', component: UserDetails, as: 'user' },
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
