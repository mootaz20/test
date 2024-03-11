import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCartComponent } from './create-cart.component';

describe('CreateCartComponent', () => {
  let component: CreateCartComponent;
  let fixture: ComponentFixture<CreateCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCartComponent]
    });
    fixture = TestBed.createComponent(CreateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
