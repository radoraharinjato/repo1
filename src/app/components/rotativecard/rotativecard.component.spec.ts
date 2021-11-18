import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotativecardComponent } from './rotativecard.component';

describe('RotativecardComponent', () => {
  let component: RotativecardComponent;
  let fixture: ComponentFixture<RotativecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotativecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotativecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
