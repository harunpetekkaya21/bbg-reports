import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTop20Component } from './summer-top-20.component';

describe('SummerTop20Component', () => {
  let component: SummerTop20Component;
  let fixture: ComponentFixture<SummerTop20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummerTop20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummerTop20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
