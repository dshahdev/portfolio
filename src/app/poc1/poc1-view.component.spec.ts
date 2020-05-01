import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc1ViewComponent } from './poc1-view.component';

describe('Poc1ViewComponent', () => {
  let component: Poc1ViewComponent;
  let fixture: ComponentFixture<Poc1ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc1ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
