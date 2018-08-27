import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtrasComponent } from './xtras.component';

describe('XtrasComponent', () => {
  let component: XtrasComponent;
  let fixture: ComponentFixture<XtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
