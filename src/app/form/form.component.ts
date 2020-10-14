import { Component, OnInit } from '@angular/core';
import { Validator, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	name = new FormControl('');
	email = new FormControl('',[Validators.required, Validators.email]);
	comments = new FormControl('');
	feedback = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  EmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
