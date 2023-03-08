import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "angularcalculator.html",
  styleUrls: ["./app.component.css"]
})
export class CalculatorComponent {
  public number: string;
  public result: number;
  public firstNumSum: string;
  public secondNumSum: string;
  public firstNumDiff: string;
  public secondNumDiff: string;
  public firstNumProd: string;
  public secondNumProd: string;
  public firstNumQuo: string;
  public secondNumQuo: string;
  public sum: string;
  public difference: string;
  public product: string;
  public quotient: string;

  calcSum() {
    var result = Number(this.firstNumSum) + Number(this.secondNumSum);
    if (result % 1 !== 0) {
      this.sum = `${this.firstNumSum} + ${this.secondNumSum} = ${result.toFixed(
        2
      )}`;
    } else {
      this.sum = `${this.firstNumSum} + ${this.secondNumSum} = ${result}`;
    }
    this.firstNumSum = null;
    this.secondNumSum = null;
  }

  calcDiff() {
    var result = Number(this.firstNumDiff) - Number(this.secondNumDiff);
    if (result % 1 !== 0) {
      this.difference = `${this.firstNumDiff} - ${
        this.secondNumDiff
      } = ${result.toFixed(2)}`;
    } else {
      this.difference = `${this.firstNumDiff} - ${this.secondNumDiff} = ${result}`;
    }
    this.firstNumDiff = null;
    this.secondNumDiff = null;
  }

  calcProduct() {
    var result = Number(this.firstNumProd) * Number(this.secondNumProd);
    if (result % 1 !== 0) {
      this.product = `${this.firstNumProd} * ${
        this.secondNumProd
      } = ${result.toFixed(2)}`;
    } else {
      this.product = `${this.firstNumProd} * ${this.secondNumProd} = ${result}`;
    }
    this.firstNumProd = null;
    this.secondNumProd = null;
  }

  calcQuotient() {
    var result = Number(this.firstNumQuo) / Number(this.secondNumQuo);
    if (result % 1 !== 0) {
      this.quotient = `${this.firstNumQuo} / ${
        this.secondNumQuo
      } = ${result.toFixed(2)}`;
    } else {
      this.quotient = `${this.firstNumQuo} / ${this.secondNumQuo} = ${result}`;
    }
    this.firstNumQuo = null;
    this.secondNumQuo = null;
  }

  reset() {
    this.sum = null;
    this.difference = null;
    this.product = null;
    this.quotient = null;
  }

  resetall() {
    this.sum = null;
    this.difference = null;
    this.product = null;
    this.quotient = null;
    this.firstNumDiff = null;
    this.firstNumQuo = null;
    this.firstNumProd = null;
    this.firstNumSum = null;
    this.secondNumDiff = null;
    this.secondNumProd = null;
    this.secondNumQuo = null;
    this.secondNumSum = null;
  }
}
