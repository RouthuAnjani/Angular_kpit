import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private service:StudentService){
  }
  student:any={}
  id=''
  name=''
  score=''
  data=null
  addStudentHandler(form:NgForm){
    this.data=form.value
    this.student.id=this.id
    this.student.name=this.name;
    this.student.score=this.score;
    this.service.addStudent(this.student).subscribe(()=>{
      alert("Student Added Successfully")
    });
    
    this.id=''
    this.name=''
    this.score=''
  }
}
