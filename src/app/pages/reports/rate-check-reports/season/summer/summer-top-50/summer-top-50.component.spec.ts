import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerTop50Component } from './summer-top-50.component';

describe('SummerTop50Component', () => {
  let component: SummerTop50Component;
  let fixture: ComponentFixture<SummerTop50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummerTop50Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummerTop50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
