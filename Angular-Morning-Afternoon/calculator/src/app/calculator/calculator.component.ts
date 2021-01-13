import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private calc: CalculatorService) { }

  ngOnInit(): void {
  }
  title = 'calculator';
  op1: number = 0;
  op2: number = 0;
  result: number = 0;
  addition(){
    this.result =  this.calc.add(this.op1,this.op2); 
  }

  subtraction(){
    this.result =  this.calc.subtract(this.op1,this.op2);
  }

  multiplication(){
    this.result =  this.calc.multiply(this.op1,this.op2);
  }

  division(){
    this.result =  this.calc.divide(this.op1,this.op2);
  }

}
