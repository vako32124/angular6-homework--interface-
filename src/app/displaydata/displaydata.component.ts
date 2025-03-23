import { Component, Input } from '@angular/core';
import { Student } from '../models/users';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'; 

@Component({
  selector: 'app-displaydata',
  imports: [CommonModule, CardComponent],
  templateUrl: './displaydata.component.html',
  styleUrl: './displaydata.component.scss'
})
export class DisplaydataComponent {
  @Input() students: Student[] = [];
}
