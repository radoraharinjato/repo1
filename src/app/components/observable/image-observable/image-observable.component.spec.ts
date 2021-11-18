import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageObservableComponent } from './image-observable.component';

describe('ImageObservableComponent', () => {
  let component: ImageObservableComponent;
  let fixture: ComponentFixture<ImageObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
