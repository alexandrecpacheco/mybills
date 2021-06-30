import { Component, OnInit, Input } from '@angular/core';
import { PaymentBills } from 'src/app/classes/payment-bills';
import { PaymentBillsService } from 'src/app/services/paymentbills.services';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() paymentBill : PaymentBills;

  constructor(private paymentBillsService : PaymentBillsService) {
    
   }

  ngOnInit(): void {
  }

  updateStatus(isActive: boolean){
    this.paymentBillsService
    .updateBills(this.paymentBill.Id, { Status: isActive })
    .catch(err => console.log(err));
  }

  deleteItem(){
    this.paymentBillsService
    .deleteBills(this.paymentBill.Id)
    .catch(err => console.log(err));
  }

}
