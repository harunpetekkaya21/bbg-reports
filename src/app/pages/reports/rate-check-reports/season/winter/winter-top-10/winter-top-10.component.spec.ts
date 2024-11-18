import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTop10Component } from './winter-top-10.component';

describe('WinterTop10Component', () => {
  let component: WinterTop10Component;
  let fixture: ComponentFixture<WinterTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinterTop10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinterTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
