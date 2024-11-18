import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTop10Component } from './summer-top-10.component';

describe('SummerTop10Component', () => {
  let component: SummerTop10Component;
  let fixture: ComponentFixture<SummerTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummerTop10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummerTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
