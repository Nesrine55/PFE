import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverpageComponent } from './discoverpage.component';

describe('DiscoverpageComponent', () => {
  let component: DiscoverpageComponent;
  let fixture: ComponentFixture<DiscoverpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
