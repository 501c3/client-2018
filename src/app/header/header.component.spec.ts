import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be instantiated.', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct text.', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Georgia DanceSport Competition');
    expect(compiled.querySelector('h4').textContent).toContain('Sept 15, 2018-Saturday');
    expect(compiled.querySelector('p').textContent).toContain('Ballroom Impact...Atlanta, GA');
    expect(compiled.querySelector('li').textContent).toContain('Home');
    expect(compiled.querySelector('li:nth-of-type(8)').textContent).toContain('Recover');
  }));
});
