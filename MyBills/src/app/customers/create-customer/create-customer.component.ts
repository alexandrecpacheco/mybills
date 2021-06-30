import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentBills } from 'src/app/classes/payment-bills';
import { PaymentBillsService } from '../../services/paymentbills.services';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  form: FormGroup;
  paymentBills: PaymentBills;
  submitted = false;

  constructor(private paymentBillsService : PaymentBillsService,
    private formControl: FormControl) { }

  ngOnInit(): void {
    this.createForm();
    this.paymentBills = new PaymentBills();
  }

  addNewItem(): void {
    if (this.form.valid){
      this.submitted = false;
      this.paymentBills = new PaymentBills();
    }
  }

  save(){
    this.paymentBillsService.createBills(this.paymentBills);
    this.paymentBills = new PaymentBills();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  createForm(): void {
    this.form = new FormGroup({
        'itens': new FormControl('', Validators.required),
        'value': new FormControl('', Validators.required),
        'dueDate':  new FormControl('', Validators.required),
        'status':  new FormControl('', Validators.required)
      });
  }
}
