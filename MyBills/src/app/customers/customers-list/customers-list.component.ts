import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PaymentBillsService } from 'src/app/services/paymentbills.services';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  paymentBills: any;

  constructor(private paymentBillsService : PaymentBillsService) { }

  ngOnInit(): void {
    this.getPaymentBillsList();
  }

  getPaymentBillsList() {
    this.paymentBillsService.getBillsList().snapshotChanges()
    .pipe(
      map(changes =>
            changes.map(c =>
              ({ Id : c.payload.key, ...c.payload.val()})
            )
        )
    ).subscribe(paymentBill => {
      this.paymentBills = paymentBill;
    });
  }

  deletePaymentBills() {
    this.paymentBillsService.deleteAll()
    .catch(err => console.log(err));
  }

}
