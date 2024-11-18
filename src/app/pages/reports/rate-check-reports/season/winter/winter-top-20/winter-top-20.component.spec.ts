import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTop20Component } from './winter-top-20.component';

describe('WinterTop20Component', () => {
  let component: WinterTop20Component;
  let fixture: ComponentFixture<WinterTop20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinterTop20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinterTop20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
