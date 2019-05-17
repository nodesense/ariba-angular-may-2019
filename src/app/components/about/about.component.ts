import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  members: string[] = ['Venkat', 'Karthik'];
  showMembers = true;

  aboutLikes = 500;

  constructor() { 
    console.log('About comp created');
  }

  
  ngOnInit() {
  }

  addMember(name: string) {
    this.members.push(name);
  }

  empty() {
    this.members = [];
  }
}