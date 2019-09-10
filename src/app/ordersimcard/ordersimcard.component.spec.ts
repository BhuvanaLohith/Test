import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersimcardComponent } from './ordersimcard.component';

describe('OrdersimcardComponent', () => {
  let component: OrdersimcardComponent;
  let fixture: ComponentFixture<OrdersimcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersimcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersimcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
