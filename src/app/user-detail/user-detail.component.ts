import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId:number
  user:User
   
  constructor(private route:ActivatedRoute,private userService:UserService) { }
 
  ngOnInit() {
    console.log("called--userdetail----")
    this.userId   =  this.route.snapshot.params.userId 
    console.log("UserID"+this.userId)
    this.getUser(this.userId)
  }

  getUser(userId){
    this.user = this.userService.getDataByPk(userId)
  }

}
