import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	name = new FormControl('');
	email = new FormControl('');
	comments = new FormControl('');
	feedback = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
