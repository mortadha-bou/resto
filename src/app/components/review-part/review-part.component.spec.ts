import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPartComponent } from './review-part.component';

describe('ReviewPartComponent', () => {
  let component: ReviewPartComponent;
  let fixture: ComponentFixture<ReviewPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
