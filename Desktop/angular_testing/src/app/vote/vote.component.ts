import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  vote:any=0;
  othervote:any=0;


  ngOnInit(): void {
    this.route.params.subscribe((p:any)=>{
        if(p['id'] == 0){
          this.router.navigate(['/user']);
        }
    });
  }

  upVote(){

    if(this.vote == 1)
    return;

    this.vote++;

  }

  moveToUser(){
    this.router.navigate(['/user']);
  }

}
