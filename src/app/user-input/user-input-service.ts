import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InvestmentInputModel } from '../investment-input-model';
import { InvestmentResultsModel } from '../investment-output-model';

@Injectable({ providedIn: 'root' })
export class UserInputService {
  private resultsCalculated = new Subject<InvestmentResultsModel[]>();

  // Observable that components can subscribe to
  resultsCalculated$ = this.resultsCalculated.asObservable();

  calculateInvestmentResults(investmentInput: InvestmentInputModel): void {
    const annualData = [];
    let investmentValue = investmentInput.initialInvestment;

    for (let i = 0; i < investmentInput.investmentDuration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investmentInput.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentInput.annualInvestment * year -
        investmentInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentInput.initialInvestment + investmentInput.annualInvestment * year,
      });
    }

    // Emit the calculated results
    this.resultsCalculated.next(annualData);
  }
}
