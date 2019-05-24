import { Component, OnInit } from '@angular/core';

import { Profile } from './profile/profile.model';
import { ProfileComponent } from './profile.profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  profile: Profile;

  constructor() {

  }

  ngOnInit() {
    this.title = 'myNEJMGroup'
  }
}
