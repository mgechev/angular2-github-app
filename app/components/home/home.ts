/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {UserDetails} from './components/user-details/UserDetails';

@Component({
  selector: 'home'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [NgFor, NgIf, RouterLink]
})
export class Home {
  users:string[];
  cache:any;
  loading:boolean;
  currentUser:any;
  constructor() {
    this.users = [];
    this.cache = {};
  }
  addUser(currentUser) {
    this.users.push(currentUser);
  }
  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1);
  }
  private getUser(u:string) {
    if (this.cache[u]) {
      return Promise.resolve(this.cache[u]);
    } else {
      return fetch(`https://api.github.com/users/${u}`)
        .then(r => {
          return r.json();
        })
        .then(user => {
          this.cache[u] = user;
          return u;
        });
    }
  }
  selectUser(user:string) {
    this.loading = true;
    this.getUser(user)
      .then((u) => {
        this.currentUser = u;
        this.loading = false;
      });
  }
}