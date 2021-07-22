import { createReducer, on } from "@ngrx/store";
import { CounterActions } from "../actions/counter.actions";

export interface CounterStateModel {
    count: number
}

const initialState: CounterStateModel = {
    count: 0
};

const _counteReducer = createReducer(
    initialState,
    on(CounterActions.increase, (state) => {
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(CounterActions.decrease, (state) => {
        return {
            ...state,
            count: state.count - 1
        }
    }),
    on(CounterActions.increaseBy, (state, { amount }) => {
        return {
            ...state,
            count: state.count + Number(amount)
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counteReducer(state, action);
}