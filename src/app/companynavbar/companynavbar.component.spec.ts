import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanynavbarComponent } from './companynavbar.component';

describe('CompanynavbarComponent', () => {
  let component: CompanynavbarComponent;
  let fixture: ComponentFixture<CompanynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanynavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
