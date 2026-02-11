import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form-value-changes',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-value-changes.html',
  styleUrl: './reactive-form-value-changes.css',
})
export class ReactiveFormValueChanges implements OnInit {
  myForm!: FormGroup;

  mytitleName:string = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();

    this.myForm.get('title')?.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((_resp:any)=>{
      console.log(_resp);
      this.mytitleName = _resp;
    })
  }

  initialForm() {
    this.myForm = this.fb.group({
      title: this.fb.control('', Validators.required)
    })
  }
}
