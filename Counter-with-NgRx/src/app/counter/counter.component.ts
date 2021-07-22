import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterActions } from '../store/actions/counter.actions';
import { CounterStateModel } from '../store/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  amount: number = 0;

  counter$: Observable<CounterStateModel> = this.store.select(state => state.counterState);

  constructor(private store: Store<{ counterState: CounterStateModel }>) { }

  ngOnInit(): void {
  }

  increase() {
    this.store.dispatch(CounterActions.increase());
  }

  decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  increaseBy() {
    this.store.dispatch(CounterActions.increaseBy({ amount: this.amount }));
  }

}
