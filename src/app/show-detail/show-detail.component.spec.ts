import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailComponent } from './show-detail.component';
import { GuideService } from '../guide.service';
import { GuideServiceFake } from '../guide.service.fake';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      providers:[{provide:GuideService,useClass:GuideServiceFake}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
