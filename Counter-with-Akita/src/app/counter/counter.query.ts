import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CounterStateModel, CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterStateModel> {

    counter$ = this.select(state => state);

    count$ = this.select(state => state.count);

    constructor(protected store: CounterStore) {
        super(store);
    }
}