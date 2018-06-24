import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  activeCount: number;
  inactiveCount: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onSetToInactive() {
    this.inactiveCount = this.userService.inactiveCount;
  }
  onSetToActive() {
    this.activeCount = this.userService.activeCount;
  }
}
