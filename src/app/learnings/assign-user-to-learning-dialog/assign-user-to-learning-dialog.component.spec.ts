import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUserToLearningDialogComponent } from './assign-user-to-learning-dialog.component';

describe('AssignUserToLearningDialogComponent', () => {
  let component: AssignUserToLearningDialogComponent;
  let fixture: ComponentFixture<AssignUserToLearningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUserToLearningDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUserToLearningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
