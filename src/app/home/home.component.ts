import { Component } from '@angular/core';
import { Student } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
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

  students: { student: Student, checked: boolean }[] = [];

  submitStudent() {
    this.students.push({ student: { ...this.student1 }, checked: false }); 
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

  delete(index: number) {
    this.students.splice(index, 1);
  }

  edit(index: number) {
    this.student1 = { ...this.students[index].student };
    this.delete(index); 
  }

  deleteChecked() {
    this.students = this.students.filter(student => !student.checked);
  }
}





