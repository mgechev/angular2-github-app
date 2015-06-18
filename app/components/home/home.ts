import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'users'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class Home {
  users:string[];
  constructor() {
    this.users = [];
  }
  addUser(currentUser) {
    this.users.push(currentUser.value);
    currentUser.value = '';
  }
  removeUser(user) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}