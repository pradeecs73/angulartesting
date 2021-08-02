import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { VoteComponent } from './vote.component';


describe('VoteComponent', () => {
  let app: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    app = fixture.componentInstance;
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  it('should check property binding', () => {
    app.vote=1;
    app.othervote=20;
    fixture.detectChanges();
    let de=fixture.debugElement.query(By.css('.totalvote'));
    let e1:HTMLElement=de.nativeElement;
    expect(e1.innerText).toContain("21");
  });

  it('should check event binding', () => {
   
    let icon=fixture.debugElement.query(By.css('.fa-car'));
        icon.triggerEventHandler('click',null);
    
     expect(app.vote).toBe(1);   
  });

});
