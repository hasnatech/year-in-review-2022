import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContactsComponent } from './slider-contacts.component';

describe('SliderContactsComponent', () => {
  let component: SliderContactsComponent;
  let fixture: ComponentFixture<SliderContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
