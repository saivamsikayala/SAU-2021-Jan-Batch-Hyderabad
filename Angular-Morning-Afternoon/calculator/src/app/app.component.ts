import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component } from '@angular/core';
import { CalculatorService } from './service/calculator.service';
import { Router } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private calc: CalculatorService, private router: Router){

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

  multiplication(a: number, b: number){
    this.result =  this.calc.multiply(this.op1,this.op2);
  }

  division(a: number, b: number){
    this.result =  this.calc.divide(a,b);
  }

  loadAddUser(){
    this.router.navigate(['adduser']);
  }

  loadApi(){
    this.router.navigate(['api']);
  }
}
