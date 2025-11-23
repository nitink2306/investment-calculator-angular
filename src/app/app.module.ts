import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeaderModule } from './header/header.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, HeaderModule, UserInputModule, InvestmentResultsModule],
  bootstrap: [App],
})
export class AppModule {}
