import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { of, lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return lastValueFrom(of(LEADERS).pipe(delay(2000)));
  }

  getFeaturedLeader(): Promise<Leader> {
    return lastValueFrom(of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)));
  }
}
