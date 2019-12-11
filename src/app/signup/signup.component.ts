import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myName:string = "admin"
  user:User ={firstName:"",lastName:"",userId:0}
  allUsers:Array<User>=[]
   
  constructor(private userService:UserService) { }

  ngOnInit() {
      console.log("init...")
  }

  saveName(){
    console.log(this.user)
    this.allUsers.push(this.user)
    console.log(this.allUsers)
    this.userService.addUser(this.user.userId,this.user.firstName,this.user.lastName)
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.userId = 0;
  }
  

 
 
  }
