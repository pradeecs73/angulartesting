import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";
import { HttpClientModule} from '@angular/common/http';
import { from ,throwError} from 'rxjs';

describe('UserComponent', () => {
  let app: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [UserService,DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data123'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data123');
    });
  }));

  it('should raised vote changed event when upvoted', () => {
       let totalVotes=null;
      app.voteChanged.subscribe((value:number)=>{
             totalVotes=value;
      });

      app.upVote();
      expect(totalVotes).not.toBeNull();

  });

  it('should return a obserable', async(() => {
  
    let dataService = fixture.debugElement.injector.get(DataService);
      spyOn(dataService, 'getallposts')
      .and.returnValue(from([[1,2,3]]));
      app.getPosts();
      expect(app.posts.length).toBe(3);
  
  }));

  it('should return a obserable count', async(() => {
  
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getallposts')
      .and.returnValue(throwError("error from test mock"));
      app.getPosts();
      expect(app.errormessage).toBe("error from test mock");
  
  }));


});
