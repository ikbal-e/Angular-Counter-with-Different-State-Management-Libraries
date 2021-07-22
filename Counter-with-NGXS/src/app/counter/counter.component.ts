import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterActions } from '../store/counter.actions';
import { CounterState, CounterStateModel } from '../store/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  amount: number = 0;

  // Example with selector
  // @Select(CounterState.count)
  // count$!: Observable<number>;

  @Select(CounterState)
  counter$!: Observable<CounterStateModel>;

  constructor(private store: Store) { }


  ngOnInit(): void {
  }

  increase() {
    this.store.dispatch(new CounterActions.Increase());
  }

  decrease() {
    this.store.dispatch(new CounterActions.Decrease());
  }

  increaseBy() {
    this.store.dispatch(new CounterActions.IncreaseBy({ amount: this.amount }));
  }

}
