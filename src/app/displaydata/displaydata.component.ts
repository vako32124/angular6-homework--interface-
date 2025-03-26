import { Component, Input ,  EventEmitter,Output} from '@angular/core';
import { Student } from '../models/users';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-displaydata',
  imports: [CommonModule, CardComponent , CommonModule , FormsModule],
  templateUrl: './displaydata.component.html',
  styleUrl: './displaydata.component.scss'
})
export class DisplaydataComponent {
  @Input() students: Student[] = [];
  @Output() editStudentEvent = new EventEmitter<Student>();
   @Output() deleteStudentEvent = new EventEmitter<Student>();

  editingStudent: Student | null = null ;;

  deleteStudent(student: Student) {
    this.students.splice(this.students.indexOf(student), 1);
  }

  editStudent(student: Student) {
    this.editStudentEvent.emit(student);
  }

}
