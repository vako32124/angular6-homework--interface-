import { Component } from '@angular/core';
import { Student } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplaydataComponent } from '../displaydata/displaydata.component';

@Component({
  selector: 'app-home',
  imports: [ FormsModule, CommonModule, DisplaydataComponent],
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

  students: Student[] = [];

  submitStudent() {
    this.students.push({ ...this.student1 });
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
  
  editStudent(student: Student) {
   this.student1 = (student) ; 
}



}



