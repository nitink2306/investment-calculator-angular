import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentResults } from './investment-results';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [InvestmentResults],
  imports: [CommonModule, CurrencyPipe],
  exports: [InvestmentResults],
})
export class InvestmentResultsModule {}
