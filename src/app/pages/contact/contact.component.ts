import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  userForm: any;
  showAlert: boolean = false;
  alertMessage: string = '';
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  submitHandler() {
    if (this.userForm.valid) {
      // Perform desired actions on form submission
      this.showAlert = true;
      this.alertMessage = 'Form submitted successfully!';
      // You can access form values using this.myForm.value
    } else {
      // Handle invalid form submission if needed
      this.showAlert = true;
      this.alertMessage = 'Invalid form submission!';
    }
  }
}
