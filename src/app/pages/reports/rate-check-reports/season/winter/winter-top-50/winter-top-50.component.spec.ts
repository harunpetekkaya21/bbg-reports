import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterTop50Component } from './winter-top-50.component';

describe('WinterTop50Component', () => {
  let component: WinterTop50Component;
  let fixture: ComponentFixture<WinterTop50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinterTop50Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinterTop50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
