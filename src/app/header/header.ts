import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  get imagePath() {
    return 'assets/investment-calculator-logo.png';
  }
}
