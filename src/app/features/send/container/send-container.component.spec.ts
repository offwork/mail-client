import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendContainerComponent } from './send-container.component';

describe('SendContainerComponent', () => {
  let component: SendContainerComponent;
  let fixture: ComponentFixture<SendContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
