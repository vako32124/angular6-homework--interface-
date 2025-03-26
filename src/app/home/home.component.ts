import { Component } from '@angular/core';
import { Student } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplaydataComponent } from '../displaydata/displaydata.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, DisplaydataComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  students: Student[] = [];

  editingStudent: Student | null = null; 

  submitStudent() {
    if (this.editingStudent) {
      const index = this.students.indexOf(this.editingStudent);
      if (index !== -1) {
        this.students[index] = { ...this.student1 };
      }
      this.editingStudent = null; 
    } else {
      this.students.push({ ...this.student1 });
    }
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

  deleteStudent(student: Student) {
    this.students.splice(this.students.indexOf(student), 1);
  }

  editStudent(student: Student) {
    this.student1 = { ...student };
    this.editingStudent = student;
  }
}




