import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  output: string = '';
  history: string = '';

  constructor() {}

  // Algorithm
  // init output that holds the string value of output
  // init history that holds the string value of history
  // init operating methods [add() subtract() multiply() divide()]
  // if an operating method is triggered => check if the last char of output is the same
  // if same => remove the last operator
  // add the operator
  // if equal is triggered => translate the output into a safe expression then evaluate the safe expression
  // if clear is triggered => remove values of history and output

  addValue(value: string) {
    if (this.output[0] == '0') {
      this.output = this.output.slice(1);
    }
    this.history += value;
    this.output += value;
  }
  add() {
    if (this.checkLastOperator()) {
      this.removeLastOperator();
    }
    this.history += '+';
    this.output += '+';
  }
  subtract() {
    if (this.checkLastOperator()) {
      this.removeLastOperator();
    }
    this.history += '-';
    this.output += '-';
  }
  multiply() {
    if (this.checkLastOperator()) {
      this.removeLastOperator();
    }
    this.history += '*';
    this.output += '*';
  }
  divide() {
    if (this.checkLastOperator()) {
      this.removeLastOperator();
    }
    this.history += '/';
    this.output += '/';
  }
  equal() {
    // if equal is triggered => translate the output into a safe expression then evaluate the safe expression
    this.output = eval(this.removeLeadingZeros(this.output)).toString();
  }
  clear() {
    // if clear is triggered => remove values of history and output
    this.output = '';
    this.history = '';
  }

  checkLastOperator(): boolean {
    return (
      this.output.slice(-1) === '+' ||
      this.output.slice(-1) === '-' ||
      this.output.slice(-1) === '*' ||
      this.output.slice(-1) === '/'
    );
  }
  removeLastOperator() {
    this.output = this.output.substring(0, this.output.length - 1);
    this.history = this.output.substring(0, this.history.length - 1);
  }
  removeLeadingZeros(inputString: string): string {
    return inputString.replace(
      /\b0+(\d+)/g,
      (_match, capturedGroup) => capturedGroup
    );
  }
}
