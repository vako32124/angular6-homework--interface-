import { Component } from '@angular/core';
import { Student } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  student1: Student = {
    name: '',
    age: null,
    grade: '',
    subjects: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: ''
    }
  };

  submittedStudent: Student | null = null;

  submitStudent() {
    this.submittedStudent = { ...this.student1 }; 
    this.clearForm();
  }

  clearForm() {
    this.student1 = {
      name: '',
      age: null,
      grade: '',
      subjects: '',
      isEnrolled: false,
      address: {
        street: '',
        city: '',
        zip: ''
      }
    };
  }
}




