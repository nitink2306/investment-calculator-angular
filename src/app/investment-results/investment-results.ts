import { Component, Input, input } from '@angular/core';
import { InvestmentResultsModel } from '../investment-output-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input() results?: InvestmentResultsModel[];
}
