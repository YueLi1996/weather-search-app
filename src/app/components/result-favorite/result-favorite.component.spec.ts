import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFavoriteComponent } from './result-favorite.component';

describe('ResultFavoriteComponent', () => {
  let component: ResultFavoriteComponent;
  let fixture: ComponentFixture<ResultFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
