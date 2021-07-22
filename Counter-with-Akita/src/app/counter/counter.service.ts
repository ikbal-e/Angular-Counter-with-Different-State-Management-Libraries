import { Injectable } from "@angular/core";
import { CounterStore } from "./counter.store";

@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increase() {
    this.counterStore.update((state) => ({ count: state.count + 1 }));
  }

  decrease() {
    this.counterStore.update((state) => ({ count: state.count - 1 }));
  }  

  increaseBy(amount: number) {
    this.counterStore.update((state) => ({ count: state.count + Number(amount) }));
  }  
}