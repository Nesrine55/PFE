import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbordingComponent } from './inbording.component';

describe('InbordingComponent', () => {
  let component: InbordingComponent;
  let fixture: ComponentFixture<InbordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
