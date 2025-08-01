import { Component, NgZone, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  dynamicText: string = '';
  phrases: string[] = [
    'Team Player.',
    'Software Developer.',
    'Backend Engineer.',
    'Software Engineer.',
    'Fullstack Developer.',
    'Code Enthusiast.',
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 50;
  delayBetweenPhrases: number = 1500;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.startTyping(), 500);
    });
  }

  startTyping() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex);
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let nextStepDelay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      nextStepDelay = this.delayBetweenPhrases;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      nextStepDelay = 500;
    }

    setTimeout(() => this.ngZone.run(() => this.startTyping()), nextStepDelay);
  }
}
