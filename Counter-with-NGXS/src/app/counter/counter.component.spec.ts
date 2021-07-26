import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CounterActions } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [NgxsModule.forRoot([CounterState])],
      providers: [],
    })
    .compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('count should be 1 after increase', () => {
    expect(component).toBeTruthy();
    component.increase();
    fixture.detectChanges();
    component.counter$.subscribe(c => expect(c.count).toBe(1));
  });

  it('count should be -1 after decrease', () => {
    expect(component).toBeTruthy();
    component.decrease();
    fixture.detectChanges();
    component.counter$.subscribe(c => expect(c.count).toBe(-1));
  });

  it('count should be 10 after increase by 10', () => {
    expect(component).toBeTruthy();
    store.dispatch(new CounterActions.IncreaseBy({amount: 10}));
    fixture.detectChanges();
    component.counter$.subscribe(c => expect(c.count).toBe(10));
  });
});
