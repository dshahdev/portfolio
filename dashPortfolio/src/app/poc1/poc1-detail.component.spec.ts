import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc1DetailComponent } from './poc1-detail.component';

describe('Poc1DetailComponent', () => {
  let component: Poc1DetailComponent;
  let fixture: ComponentFixture<Poc1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Poc1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Poc1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
