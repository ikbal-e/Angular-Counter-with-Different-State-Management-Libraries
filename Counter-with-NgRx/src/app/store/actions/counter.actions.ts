import { createAction, props } from "@ngrx/store";

export namespace CounterActions {
    export const increase = createAction(
        '[Counter] Increase'
    );

    export const decrease = createAction(
        '[Counter] Decrease'
    );

    export const increaseBy = createAction(
        '[Counter] IncreaseBy',
        props<{ amount: number }>()
    );

}
