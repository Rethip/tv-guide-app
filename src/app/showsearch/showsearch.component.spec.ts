import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsearchComponent } from './showsearch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

describe('ShowsearchComponent', () => {
  let component: ShowsearchComponent;
  let fixture: ComponentFixture<ShowsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsearchComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[ReactiveFormsModule,FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
