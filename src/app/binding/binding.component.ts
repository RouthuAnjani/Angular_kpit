import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  username:string=''
  data=null
  submitHandler(form:NgForm){
    this.data=form
    this.username=''
  }
}
