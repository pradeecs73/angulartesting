import { async,TestBed } from '@angular/core/testing';
import { ServicetestService } from './servicetest.service';
import { HttpClient,HttpClientModule} from '@angular/common/http';

describe('ServicetestService', () => {
  let service: ServicetestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ServicetestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getNameservicetest method', () => {
    service.getNameservicetest();
    expect(service.getNameservicetest).toBeDefined();
  });

});
