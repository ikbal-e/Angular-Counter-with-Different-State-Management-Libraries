import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CounterStateModel {
    count: number;
}

function createInitialState(): CounterStateModel {
    return {
        count: 0,
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counterStore' })
export class CounterStore extends Store<CounterStateModel> {
    constructor() {
        super(createInitialState());
    }
}