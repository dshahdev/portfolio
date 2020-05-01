import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc1ListComponent } from './poc1-list.component';

describe('Poc1ListComponent', () => {
  let component: Poc1ListComponent;
  let fixture: ComponentFixture<Poc1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
