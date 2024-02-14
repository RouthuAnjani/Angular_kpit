import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css',
  providers:[StudentService]
})
export class ListStudentsComponent {
  students:any[]=[];

  service:StudentService;
  constructor(service:StudentService){
    this.service=service;
  }
    ngOnInit(): void {
      this.service.getAllStudents().subscribe((data)=>{
        this.students=data;
        console.log(this.students)
      });
  }


  @Input() student:any={};
  getBackgroundColor(){
    if(this.student.score<=40){
      console.log("red")
      return 'red';
    }
  }
 
}
