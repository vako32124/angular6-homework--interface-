import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Student } from '../models/users';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() student!: Student;
  @Output() deleteStudentEvent = new EventEmitter<Student>();
  @Output() editStudentEvent = new EventEmitter<Student>();

  deletecard() {
    this.deleteStudentEvent.emit(this.student);
  }

  edit() {
    this.editStudentEvent.emit(this.student);
  }
}
