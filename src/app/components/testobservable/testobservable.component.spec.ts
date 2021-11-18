import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestobservableComponent } from './testobservable.component';

describe('TestobservableComponent', () => {
  let component: TestobservableComponent;
  let fixture: ComponentFixture<TestobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestobservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
