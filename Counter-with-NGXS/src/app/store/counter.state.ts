import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CounterActions } from './counter.actions';

export interface CounterStateModel {
    count: number
}

@State<CounterStateModel>({
    name: 'counterState',
    defaults: {
        count: 0
    }
})
@Injectable()
export class CounterState {

    @Selector()
    static count(state: CounterStateModel) {
        return state.count;
    }

    @Action(CounterActions.Increase)
    public increase({ setState }: StateContext<CounterStateModel>) {
        setState((state) => ({ ...state, count: state.count + 1 }));
    }

    @Action(CounterActions.Decrease)
    public decrease(ctx: StateContext<CounterStateModel>) {
        ctx.patchState({ count: ctx.getState().count - 1 });
    }

    @Action(CounterActions.IncreaseBy)
    public increaseBy(ctx: StateContext<CounterStateModel>, { payload }: { payload: { amount: number } }) {
        ctx.setState((state) => ({ ...state, count: state.count + Number(payload.amount) }));
    }
}