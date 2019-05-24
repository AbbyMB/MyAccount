import { Component, OnInit, Input } from '@angular/core';

import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;


  constructor() {

   }

  ngOnInit() {
    this.profile = new Profile(1, 'Abby', 'Bardin', 'USA', 'MMS', '', 'consultant', new Date('10 27, 1981'))
  }

}
