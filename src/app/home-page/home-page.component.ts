import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  isScrolled = false;
  isSubmit = false;
  constructor(private _fb: FormBuilder) { }

  @HostListener("window:scroll") public scrollEvent() {
    window.scrollY >= 300 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

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
