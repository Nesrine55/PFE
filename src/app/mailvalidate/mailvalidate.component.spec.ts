import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailvalidateComponent } from './mailvalidate.component';

describe('MailvalidateComponent', () => {
  let component: MailvalidateComponent;
  let fixture: ComponentFixture<MailvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
