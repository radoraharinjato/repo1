import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvitemComponent } from './cvitem.component';

describe('CvitemComponent', () => {
  let component: CvitemComponent;
  let fixture: ComponentFixture<CvitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
