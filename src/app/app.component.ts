import { Component } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm-front';
  newUser: User = { name: "", email: "", observations: "", photoUrl: "", contacted: false };
  users: User[] = [];

  constructor(private userService: UsersService) {
    this.userService.getAllUsers()
      .then(users => {
        this.users = users;
      })
  }

  addNew() {
    this.userService.createUser(this.newUser)
      .then(newUser => {
        this.users.push(newUser);
        this.newUser = { name: "", email: "", observations: "", photoUrl: "", contacted: false }
      })
  }
  deleteMe(id: string) {
    this.userService.deleteUser(id)
      .then(deletedUser => {
        this.users = this.users.filter(u => u.id != id);
      })
  }



}
