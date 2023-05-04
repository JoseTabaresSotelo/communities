import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxLengthPipe } from '../../pipes/max-length.pipe';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, MaxLengthPipe],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() public tag: any;

}
