export namespace CounterActions {

    export class Increase {
        static readonly type = '[Counter] Increase';
        constructor() { }
    }

    export class Decrease {
        static readonly type = '[Counter] Decrease';
        constructor() { }
    }

    export class IncreaseBy {
        static readonly type = '[Counter] IncreaseBy';
        constructor(public payload: { amount: number }) { }
    }
}
