import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvembaucheComponent } from './cvembauche.component';

describe('CvembaucheComponent', () => {
  let component: CvembaucheComponent;
  let fixture: ComponentFixture<CvembaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvembaucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvembaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
