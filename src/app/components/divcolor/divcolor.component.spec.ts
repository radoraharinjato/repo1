import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivcolorComponent } from './divcolor.component';

describe('DivcolorComponent', () => {
  let component: DivcolorComponent;
  let fixture: ComponentFixture<DivcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
