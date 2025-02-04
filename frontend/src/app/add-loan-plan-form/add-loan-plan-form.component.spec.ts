import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanPlanFormComponent } from './add-loan-plan-form.component';

describe('AddLoanPlanFormComponent', () => {
  let component: AddLoanPlanFormComponent;
  let fixture: ComponentFixture<AddLoanPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLoanPlanFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLoanPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
