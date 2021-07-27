import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let counterService: CounterService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
    })
    .compileComponents();

    counterService = TestBed.inject(CounterService);
  
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
    counterService.increaseBy(10);
    fixture.detectChanges();
    component.counter$.subscribe(c => expect(c.count).toBe(10));
  });
});
