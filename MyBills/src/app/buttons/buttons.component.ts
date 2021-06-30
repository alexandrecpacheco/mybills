import { Component, OnInit } from '@angular/core';
import { PaymentBillsComponent } from '../payment-bills/payment-bills.component';
import { PaymentBills } from '../classes/payment-bills';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {

  trashes = [];
  containers = [];
  isDeleted : boolean = false;
  bill = new PaymentBills;

  constructor(public payments : PaymentBillsComponent) {
    
   }

  ngOnInit(): void {
    
  } 

  add() {
    this.containers.push(this.containers.length);
  }

  delete(){
      this.payments.isDeleted = this.isDeleted=!this.isDeleted;
  }
}
