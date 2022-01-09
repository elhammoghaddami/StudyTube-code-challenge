import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLearningDialogComponent } from './add-learning-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


describe('AddLearningDialogComponent', () => {
  let comp: AddLearningDialogComponent;
  let fixture: ComponentFixture<AddLearningDialogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [AddLearningDialogComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogMock }],

    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddLearningDialogComponent);
        comp = fixture.componentInstance;
      });

  });

  it('Check initial form values for addLearning form group', () => {
    const addLearningFormGroup = comp.addLearningForm;
    const addLearningFormValus = {
      name: '',
      status: ''
    }
    expect(addLearningFormGroup.value).toEqual(addLearningFormValus)
  });
  it(`Form should be valid`, () => {
    const addLearningFormGroup = comp.addLearningForm;
    addLearningFormGroup.controls['name'].setValue('js');
    addLearningFormGroup.controls['status'].setValue('active')
    expect(addLearningFormGroup.valid).toBeTruthy();
  });
  it(`Form should be invalid`, () => {
    const addLearningFormGroup = comp.addLearningForm;
    addLearningFormGroup.controls['name'].setValue('js');
    addLearningFormGroup.controls['status'].setValue('')
    expect(addLearningFormGroup.valid).toBeFalse();
  });
});
export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ action: true }),
    };
  }
}
