import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { VoteComponent } from './vote.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable,Subject } from 'rxjs';
import {EMPTY} from 'rxjs';


class RouterStub{
    navigate(params){

    }
}

class ActivateRouteStub{
  // params:Observable<any>=EMPTY;
   private subject = new Subject();

   push(value){
     this.subject.next(value);
   }

   get params(){
      return this.subject.asObservable();
   }

}


describe('VoteComponent', () => {
  let app: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ],
      providers: [
        {provide:Router,useClass:RouterStub},
        {provide:ActivatedRoute,useClass:ActivateRouteStub},
      ]
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

  it('should navigate to user component', () => {
       let router=TestBed.get(Router);
       let spy=spyOn(router,'navigate');

       app.moveToUser();
       expect(spy).toHaveBeenCalledWith(['/user']);
  });

  it('should navigate to not found component', () => {
    let router=TestBed.get(Router);
    let spy=spyOn(router,'navigate');

    fixture.detectChanges();

    let route:ActivateRouteStub=TestBed.get(ActivatedRoute);
        route.push({id:0})

    expect(spy).toHaveBeenCalledWith(['/user']);
});

});
