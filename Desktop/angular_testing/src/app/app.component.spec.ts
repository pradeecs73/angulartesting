import { TestBed, async } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {RouterOutlet,RouterLinkWithHref} from '@angular/router';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angulartest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angulartest');
  });

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('angulartest');
  }));

  it('should have route outlet', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    
       expect(de).not.toBeNull();
  });

  it('should have link with user', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let debugelements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index=debugelements.findIndex(de=>de.properties['href'] == '/user');
       expect(index).toBeGreaterThan(-1);
  });


});
