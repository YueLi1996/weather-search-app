import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetandcityComponent } from './streetandcity.component';

describe('StreetandcityComponent', () => {
  let component: StreetandcityComponent;
  let fixture: ComponentFixture<StreetandcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetandcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetandcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
