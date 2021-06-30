import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { PaymentBills } from '../classes/payment-bills';

@Injectable({
  providedIn: 'root'
})
export class PaymentBillsService {

  private dbPath = '/paymentBills';

  paymentBillsRef : AngularFireList<PaymentBills> = null;

  constructor(private db: AngularFireDatabase) {
    this.paymentBillsRef = this.db.list(this.dbPath);
   }

   createPaymentBills(paymentBill: PaymentBills) : void {
      this.paymentBillsRef.push(paymentBill);
   }

   updatePaymentBills(key: string, value: any): Promise<void>{
     return this.paymentBillsRef.update(key, value);
   }

   deletePaymentBills(key: string): Promise<void>{
     return this.paymentBillsRef.remove(key);
   }

   getPaymentBillsList(): AngularFireList<PaymentBills>{
     return this.paymentBillsRef;
   }

   deleteAll(): Promise<void>{
     return this.paymentBillsRef.remove();
   }

}
