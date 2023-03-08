import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { CalculatorComponent } from "./app.calculator";

@NgModule({
  declarations: [CalculatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class AppModule {}
