import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: any[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
  }
}


html
<!-- profile-list.component.html -->
<div *ngFor="let profile of profiles">
  <h2>{{ profile.name }}</h2>
  <p>{{ profile.description }}</p>
  <!-- Add Summary button here -->
</div>