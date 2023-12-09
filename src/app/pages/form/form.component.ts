import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormElementsModule } from '../../components/form-elements/form-elements.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormElementsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      // Diğer form kontrol alanları...
    });
  }

  ngOnInit(): void {}

  onSubmit() {}
}
