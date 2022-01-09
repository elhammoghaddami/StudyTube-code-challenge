import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ILearning } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-learning-dialog',
  templateUrl: './add-learning-dialog.component.html',
  styleUrls: ['./add-learning-dialog.component.scss']
})
export class AddLearningDialogComponent implements OnInit {
  status = [{ name: 'active', id: 1 }, { name: 'archive', id: 0 }]
  addLearningForm!: FormGroup;
  errorMessage: string = '';
  get f(): { [key: string]: AbstractControl } {
    return this.addLearningForm.controls;
  }
  constructor(
    public dialogRef: MatDialogRef<AddLearningDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
   
  }
  buildForm() {
    this.addLearningForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  submit({ value, valid }: { value: ILearning, valid: boolean }) {
    this.dialogRef.close(value)
  }
  close() {
    this.dialogRef.close()
  }
}
