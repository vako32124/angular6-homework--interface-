import { Component, Input } from '@angular/core';
import { Student } from '../models/users';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() student!: Student;
}
