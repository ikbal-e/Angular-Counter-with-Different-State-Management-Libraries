import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterQuery } from './counter.query';
import { CounterService } from './counter.service';
import { CounterStateModel } from './counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  amount: number = 0;

  counter$!: Observable<CounterStateModel>;

  constructor(
    private counterService: CounterService,
    private counterQuery: CounterQuery
  ) { }

  ngOnInit(): void {
    this.counter$ = this.counterQuery.counter$;
  }

  increase() {
    this.counterService.increase();
  }

  decrease() {
    this.counterService.decrease();
  }

  increaseBy() {
    this.counterService.increaseBy(this.amount);
  }

}
