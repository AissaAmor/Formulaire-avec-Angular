import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewService } from 'src/app/services/new.service';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

 @Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  postId;
  posts;
  constructor(private formBuilder: FormBuilder ,private ser:NewService,private http:HttpClient,private tests:TestService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['',[ Validators.required,Validators.minLength(5)]],
          lastName: ['',[ Validators.required,Validators.minLength(5)]],
          email: ['', [Validators.required, Validators.email]],
          telephone:['',[Validators.required,Validators.minLength(8)]],
          id:['']
        });
        this.ser.postDate().subscribe(data=>{
          console.log(data)
          this.posts=data;
        });
        this.ser.postDateID().subscribe(data=>{
          console.log(data)
          // this.posts=data;
        });
       }
        clickID(){
          this.ser.postDateByID(this.registerForm.controls.id.value).subscribe(data=>{
            console.log(data)
            // this.posts=data;
          });
        }
        
  test() {
    this.submitted = true;
    alert(this.tests.dataTest())
    // alert(this.ser.testSer())
    if (this.registerForm) {
      console.log(this.registerForm.value)
      return;
    }

}
}