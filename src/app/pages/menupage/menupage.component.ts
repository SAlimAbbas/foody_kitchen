import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css'],
})
export class MenupageComponent {
  userForm: any;
  showAlert: boolean = false;
  alertMessage: string = '';
  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService,
    private fb: FormBuilder
  ) {}
  getMenuId: any;
  menuData: any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((val) => {
        return val.id == this.getMenuId;
      });
    }

    this.userForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4)]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  submitHandler() {
    if (this.userForm.valid) {
      // Perform desired actions on form submission
      this.showAlert = true;
      this.alertMessage = 'Order placed successfully!';
      // You can access form values using this.myForm.value
    } else {
      // Handle invalid form submission if needed
      this.showAlert = true;
      this.alertMessage = 'Invalid Details!';
    }
  }
}
