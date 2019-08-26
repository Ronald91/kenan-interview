import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fun-with-forms',
  templateUrl: './fun-with-forms.component.html',
  styleUrls: ['./fun-with-forms.component.scss']
})
export class FunWithFormsComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });


  constructor() {}

  ngOnInit() {
  }

  onSubmit() :void{
    console.warn(this.profileForm.value);
  }
}
