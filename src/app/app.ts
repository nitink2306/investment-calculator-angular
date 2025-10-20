import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';
import { InvestmentResultsModel } from './investment-output-model';
import { UserInputService } from './user-input/user-input-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('investment-calculator');
  results: InvestmentResultsModel[] = [];
  private subscription?: Subscription;

  constructor(private userInputService: UserInputService) {}

  ngOnInit() {
    // Subscribe to results from the service
    this.subscription = this.userInputService.resultsCalculated$.subscribe((results) => {
      this.results = results;
    });
  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    this.subscription?.unsubscribe();
  }
}
