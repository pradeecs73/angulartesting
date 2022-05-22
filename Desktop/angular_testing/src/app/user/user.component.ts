import { Component, OnInit,EventEmitter} from '@angular/core';

import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";
import { ServicetestService } from "../shared/servicetest.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService,ServicetestService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;
  totalVotes:any=0;
  voteChanged=new EventEmitter();
  posts:any=[];
  errormessage:any;
  serviceTestName:any;

  constructor(private userService: UserService, private dataService: DataService,
    private serviceTestService:ServicetestService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);

  }

  getPosts(){

    this.dataService.getallposts().subscribe(
      (posts: any) => {
        this.posts=posts;
      },
      (error:any) => {
        this.errormessage=error;
      }
    );

  }

   upVote()
   {
      this.totalVotes++;
      this.voteChanged.emit(this.totalVotes);
   }

   getServicetestname(){
    this.serviceTestName=this.serviceTestService.getNameservicetest();
  }

}
