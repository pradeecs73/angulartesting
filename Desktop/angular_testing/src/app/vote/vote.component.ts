import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  vote:any=0;
  othervote:any=0;


  ngOnInit(): void {
  }

  upVote(){

    if(this.vote == 1)
    return;

    this.vote++;

  }

}
