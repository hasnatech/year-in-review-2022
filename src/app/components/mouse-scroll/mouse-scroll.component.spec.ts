import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseScrollComponent } from './mouse-scroll.component';

describe('MouseScrollComponent', () => {
  let component: MouseScrollComponent;
  let fixture: ComponentFixture<MouseScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
