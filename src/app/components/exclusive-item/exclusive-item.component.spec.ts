import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveItemComponent } from './exclusive-item.component';

describe('ExclusiveItemComponent', () => {
  let component: ExclusiveItemComponent;
  let fixture: ComponentFixture<ExclusiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclusiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
