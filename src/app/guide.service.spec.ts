import { TestBed,inject } from '@angular/core/testing';

import { GuideService } from './guide.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GuideService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[GuideService]
  }));

  it('should be created',inject ([GuideService],(service:GuideService)=>{expect (service).toBeTruthy}) )
});
