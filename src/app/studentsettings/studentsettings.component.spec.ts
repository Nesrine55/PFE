import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsettingsComponent } from './studentsettings.component';

describe('StudentsettingsComponent', () => {
  let component: StudentsettingsComponent;
  let fixture: ComponentFixture<StudentsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
