import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AsyncPipe,
    DatePipe,
    JsonPipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
  ],
  exports: [
    AsyncPipe,
    DatePipe,
    JsonPipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
  ],
})
export class PipesModule {}
