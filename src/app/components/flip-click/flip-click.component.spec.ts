import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipClickComponent } from './flip-click.component';

describe('FlipClickComponent', () => {
  let component: FlipClickComponent;
  let fixture: ComponentFixture<FlipClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
