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

  private _counter = new BehaviorSubject<CounterStateModel>(this.initialState);

  public counter = this._counter.asObservable();

  constructor() { }

  increase() {
    this._counter.next({ count: this._counter.getValue().count + 1 })
  }

  decrease() {
    this._counter.next({ count: this._counter.getValue().count - 1 })
  }

  increaseBy(amount: number) {
    this._counter.next({ count: this._counter.getValue().count + Number(amount) })
  }
}
