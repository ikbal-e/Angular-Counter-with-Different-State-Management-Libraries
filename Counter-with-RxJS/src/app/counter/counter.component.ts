import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService, CounterStateModel } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  amount: number = 0;

  counter$!: Observable<CounterStateModel>;

  constructor(protected counterService: CounterService) { }

  ngOnInit(): void {
    this.counter$ = this.counterService.counter;
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
