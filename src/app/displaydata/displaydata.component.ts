import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/users';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-displaydata',
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent {
  @Input() students: Student[] = [];
  @Output() editStudentEvent = new EventEmitter<Student>();
  @Output() deleteStudentEvent = new EventEmitter<Student>();

  deleteStudent(student: Student) {
    this.deleteStudentEvent.emit(student);
  }

  editStudent(student: Student) {
    this.editStudentEvent.emit(student);
  }
}

