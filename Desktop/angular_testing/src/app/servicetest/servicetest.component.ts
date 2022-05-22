import { Component, OnInit } from '@angular/core';
import { ServicetestService } from "../shared/servicetest.service";
import { DataService } from "../shared/data.service";

@Component({
  selector: 'app-servicetest',
  templateUrl: './servicetest.component.html',
  styleUrls: ['./servicetest.component.css'],
  providers: [ServicetestService,DataService]
})
export class ServicetestComponent implements OnInit {

  data: string;
  posts:any=[];
  errormessage:any;
  serviceTestName:any;

  constructor(private dataService: DataService, private serviceTestService: ServicetestService) { }

  ngOnInit(): void {
    this.serviceTestService.getDetailsservicetest().then((data: string) => this.data = data);
  }

  getPostssericetest(){

    this.serviceTestService.getallpostsservicetest().subscribe(
      (posts: any) => {
        this.posts=posts;
      },
      (error:any) => {
        this.errormessage=error;
      }
    );

  }

  getServicetestname(){
    this.serviceTestName=this.serviceTestService.getNameservicetest();
  }

}
