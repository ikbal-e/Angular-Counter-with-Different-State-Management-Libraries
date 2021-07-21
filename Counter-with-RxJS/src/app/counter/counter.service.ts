import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CounterStateModel {
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  initialState: CounterStateModel = {
    count: 0
  }

  public counter = new BehaviorSubject<CounterStateModel>(this.initialState);

  constructor() { }

  increase() {
    this.counter.next({ count: this.counter.getValue().count + 1 })
  }

  decrease() {
    this.counter.next({ count: this.counter.getValue().count - 1 })
  }

  increaseBy(amount: number) {
    this.counter.next({ count: this.counter.getValue().count + Number(amount) })
  }
}
