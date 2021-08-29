import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidePanelComponent } from './hide-panel.component';

describe('HidePanelComponent', () => {
  let component: HidePanelComponent;
  let fixture: ComponentFixture<HidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
