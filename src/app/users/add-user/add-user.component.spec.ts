import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('AddUserComponent', () => {
  let comp: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AddUserComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogMock }],

    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AddUserComponent);
        comp = fixture.componentInstance;
      });
  });
  it('Test a form group element count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#addUserForm');
    const inputElements = formElement.querySelectorAll('input')
    expect(inputElements.length).toEqual(2)
  });
  it('Check initial form values for addUser form group', () => {
    const addUserFormGroup = comp.addUserForm;
    const addUserFormValus = {
      email: '',
      name: ''
    }
    expect(addUserFormGroup.value).toEqual(addUserFormValus)
  });
  it(`form should be valid`, () => {
    const addUserFormGroup = comp.addUserForm;
    addUserFormGroup.controls['email'].setValue('em@mail.com')
    addUserFormGroup.controls['name'].setValue('john')
    expect(addUserFormGroup.valid).toBeTruthy();
  });
  it(`form should be invalid`, () => {
    const addUserFormGroup = comp.addUserForm;
    addUserFormGroup.controls['email'].setValue('')
    addUserFormGroup.controls['name'].setValue('')
    expect(addUserFormGroup.valid).toBeFalse();
  });
  it('The email field invalidity', () => {
    let errors = {};
    const addUserFormGroup = comp.addUserForm;
    const email = addUserFormGroup.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['invalidEmailAddress']).toBeTruthy();
  });
  it('The email field validity', () => {
    let errors = {};
    const addUserFormGroup = comp.addUserForm;
    const email = addUserFormGroup.controls['email'];
    email.setValue("test@mail.com");
    errors = email.errors || {};
    expect(errors['invalidEmailAddress']).toBeFalsy();
  });
});
export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ action: true }),
    };
  }
}
