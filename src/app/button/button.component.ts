import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonName: string = '';

  onButtonClick() {
    if (this.buttonName === 'Download CV') {
      window.open(
        'https://drive.google.com/file/d/1zhijTBqwX3TjtbzkuXvTi2vZxN_U5r88/view?usp=drive_link',
        '_blank'
      );
    } else if (this.buttonName === 'Contact Me') {
      window.location.hash = '#footer';
    }
  }
}
