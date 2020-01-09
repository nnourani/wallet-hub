import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyCreditComponent } from '../components/apply-credit/apply-credit.component';
import { CurrencyFormat } from '../pipes/currency-format';
import { PostRoutingModule } from './creadit-routing.module';



@NgModule({
  declarations: [
    ApplyCreditComponent,
    CurrencyFormat],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreditModule { }
