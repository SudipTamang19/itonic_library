import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @ViewChild('pass') pass !: ElementRef

  registerForm: FormGroup

  constructor(private fb: FormBuilder, private authService:AuthService,private messageService:MessageService, private router:Router) {
    this.registerForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      isAdmin:['false']
    })
  }

  ngOnInit(): void {
  }

  get rfControls() {
    return this.registerForm.controls;
  }

  registerFormSubmit() {
    if (this.registerForm.valid) {
      let data = this.registerForm.value
      const ia = this.registerForm.value['isAdmin']
      let isAdmin = false
      if(ia==="true")
      {
        isAdmin=true
      }
      data['isAdmin']=isAdmin
      this.authService.userRegister(data).subscribe(res => {
        this.messageService.showSuccessMessage("user added sucessfully")
        this.registerForm.reset()
        this.router.navigate(['/admin/user/viewuser'])

      }
      
      )
    }
  }

  hideShowPass() {
    // console.log(this.pass.nativeElement.type)
    let type = this.pass.nativeElement.type
    if (type === 'password') {
      this.pass.nativeElement.type = 'text'
    }
    else {
      this.pass.nativeElement.type = 'password'
    }
  }

}
