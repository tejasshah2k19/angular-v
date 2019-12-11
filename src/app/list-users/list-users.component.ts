import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user: User
  users: Array<User> = []
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    //this.users.push({userId:1,firstName:"admin",lastName:"admin"})
    //this.users.push({userId:2,firstName:"guest",lastName:"guest"})
    this.users = this.userService.getAllUsers();
  }

  removeUser(userId) {
    console.log("remove => " + userId)
    this.users = this.users.filter(i => i.userId != userId)
  }

  getDetail(userId) {
    this.user = this.userService.getDataByPk(userId)
  }
}
