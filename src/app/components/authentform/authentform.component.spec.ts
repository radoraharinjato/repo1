import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentformComponent } from './authentform.component';

describe('AuthentformComponent', () => {
  let component: AuthentformComponent;
  let fixture: ComponentFixture<AuthentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
