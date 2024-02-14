import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.css'
})
export class MultiplicationTableComponent {
  data:number
  a:number[]=[]
  submitHandler(form:NgForm){
    console.log(this.data)
    if(this.data>0){
      this.a=[]
      for(let i=1;i<=10;i++){
        this.a.push(i*this.data)
      }
    }
    console.log('Form Submitted')
    console.log(form.value)
}
}