import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClearComponent } from './search-clear.component';

describe('SearchClearComponent', () => {
  let component: SearchClearComponent;
  let fixture: ComponentFixture<SearchClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
