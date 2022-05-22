import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicetestComponent } from './servicetest.component';
import { HttpClientModule} from '@angular/common/http';
import { ServicetestService } from "../shared/servicetest.service";
import { DataService } from "../shared/data.service";

describe('ServicetestComponent', () => {
  let component: ServicetestComponent;
  let fixture: ComponentFixture<ServicetestComponent>;
  let mockServiceTestService:ServicetestService;  

  beforeEach(async(() => {
    mockServiceTestService=jasmine.createSpyObj('ServicetestService',['getDetailsservicetest','getallpostsservicetest','getNameservicetest']);

    TestBed.configureTestingModule({
      declarations: [ ServicetestComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide:ServicetestService,useValue:mockServiceTestService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should fetch data successfully if called asynchronously', async(() => {
    Object.getOwnPropertyDescriptor(mockServiceTestService,'getDetailsservicetest').value.and.returnValue(Promise.resolve('Data123'));  
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data123');
    });
  }));*/

  it('should get name from service file', () => {
    let servicTestService = fixture.debugElement.injector.get(ServicetestService);
    Object.getOwnPropertyDescriptor(mockServiceTestService,'getNameservicetest').value.and.returnValue('prasad');  
    spyOn(servicTestService, 'getNameservicetest')
      .and.returnValue('prasad');
    fixture.detectChanges();
    component.getServicetestname();
    expect(component.serviceTestName).toBe('prasad');
  });

});
