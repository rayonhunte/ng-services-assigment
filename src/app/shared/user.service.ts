import { Injectable, EventEmitter } from '@angular/core';
import { CountService } from './count.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeCount = 0;
  inactiveCount = 0;

  activeUpdate = new EventEmitter <any>();
  inactiveUpdate = new EventEmitter <any>();

  constructor(private countService: CountService) { }


  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveCount = this.countService.onActive(this.inactiveCount);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeCount = this.countService.onInactive(this.activeCount);
  }

}
