import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexthComponent } from './texth.component';

describe('TexthComponent', () => {
  let component: TexthComponent;
  let fixture: ComponentFixture<TexthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
