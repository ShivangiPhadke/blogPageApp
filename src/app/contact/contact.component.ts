import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 isScrolled = false;
  isSubmit = false;

    constructor(private _fb: FormBuilder) { }

  contactForm = this._fb.group({
    name: this._fb.control('', Validators.required),
    email: this._fb.control('', Validators.compose([Validators.required, Validators.email])),
    contactNo: this._fb.control('', Validators.required),
    message: this._fb.control('', Validators.required)
  })

  onSubmit() {
    this.isSubmit = true;
    this.contactForm.reset();
  }
}
