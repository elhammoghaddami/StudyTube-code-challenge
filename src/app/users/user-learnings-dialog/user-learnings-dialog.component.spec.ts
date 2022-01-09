import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLearningsDialogComponent } from './user-learnings-dialog.component';

describe('UserLearningsDialogComponent', () => {
  let component: UserLearningsDialogComponent;
  let fixture: ComponentFixture<UserLearningsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLearningsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLearningsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
