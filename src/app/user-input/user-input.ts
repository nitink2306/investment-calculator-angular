import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input-service';
import { InvestmentInputModel } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  investmentDuration: number = 0;

  constructor(private userInputService: UserInputService) {}

  onSubmit() {
    const investmentInput: InvestmentInputModel = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      investmentDuration: this.investmentDuration,
    };

    // Service will calculate and emit results
    this.userInputService.calculateInvestmentResults(investmentInput);
  }
}
