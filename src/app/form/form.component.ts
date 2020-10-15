import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import {MyFormData} from '../myformdata'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public data = null;
  public gotData: MyFormData = {
    name: '',
    email: '',
    comment: '',
    feedback: ''
  };
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      comment: new FormControl(''),
      feedback: new FormControl(''),
      })

      this._dataService.getIntialData().subscribe(
        data =>  {
          this.gotData = data;
          this.data.setValue(data)},
        error => alert(error),
      )
    // this.data.setValue(this._dataService.getIntialData())
  }

  get email() {return this.data.get('email');}
  get name() {return this.data.get('name');}
  get feedback() {return this.data.get('feedback');}
  get comment() {return this.data.get('comment');}
  
  EmailErrorMessage() {
    if (this.data.get('email').hasError('required')) {
      return 'Email is required';
    }

    return this.data.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    // console.log(this.data.value)
    this._dataService.postData(this.data.value).subscribe(
      data => {
        this.gotData = data;
        alert("Posted Successfully")
      },
      error => alert("Post Unsuccessful. See the console for more details"),
    )
  }
}
