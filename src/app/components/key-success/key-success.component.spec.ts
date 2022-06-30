import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySuccessComponent } from './key-success.component';

describe('KeySuccessComponent', () => {
  let component: KeySuccessComponent;
  let fixture: ComponentFixture<KeySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
