import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/core/services/validation.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('UploadFileInput') uploadFileInput?: ElementRef;
  addUserForm!: FormGroup;
  errorMessage: string = '';
  myfilename: string = 'Choose Files';

  get f(): { [key: string]: AbstractControl } {
    return this.addUserForm.controls;
  }
  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

  }
  buildForm() {
    this.addUserForm = this.formBuilder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      name: ['', Validators.required],
      avatar: ['']
    });
  }
  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {
      this.myfilename = fileInput.target.files[0].name
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        debugger
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.addUserForm.controls['avatar'].setValue(imgBase64Path);
        };
      };
    
      reader.readAsDataURL(fileInput.target.files[0]);
    } else {
      this.myfilename = 'Select File';
    }
  }

  submit({ value, valid }: { value: IUser, valid: boolean }) {
    // const formData = new FormData();
    // formData.append('file', this.addUserForm.get('fileSource').value);
    this.dialogRef.close(value)
  }
  close() {
    this.dialogRef.close()
  }
}
