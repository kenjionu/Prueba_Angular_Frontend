import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemComponent } from './moviem.component';

describe('MoviemComponent', () => {
  let component: MoviemComponent;
  let fixture: ComponentFixture<MoviemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
