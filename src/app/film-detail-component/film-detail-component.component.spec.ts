import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailComponentComponent } from './film-detail-component.component';

describe('FilmDetailComponentComponent', () => {
  let component: FilmDetailComponentComponent;
  let fixture: ComponentFixture<FilmDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
