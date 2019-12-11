import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Array<User> = []  
  constructor() {
    this.users.push({"userId":12,"firstName":"aaaa","lastName":"aaa"})

   }

  addUser(userId,firstName,lastName){
    this.users.push({"userId":userId,"firstName":firstName,"lastName":lastName});
  }

  getAllUsers(){
    return this.users;
  }

  getDataByPk(userId){
    return this.users.find(i=>i.userId == userId)
  }

}
