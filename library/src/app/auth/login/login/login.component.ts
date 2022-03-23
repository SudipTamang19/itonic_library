import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('passw') pass !: ElementRef

  loginForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router, private adminService: AdminService,private messageService:MessageService,private authService:AuthService) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get lfControls() {
    return this.loginForm.controls;
  }

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.adminService.getUsers().subscribe(res => {
        let users = res
        let id: any
        let userAndPasswordPresent=false
        const username = this.loginForm.value['username']
        const password = this.loginForm.value['password']
        // console.log( username +" "+ password)
    
        for (var i in Object.keys(users)) {
    
          if(users[i]['username']==username && users[i]['password']==password)
          {
              userAndPasswordPresent = true;
              
              id = users[i]['id']
          }
          // console.log(users[i]['username'] +" "+ users[i]['password'])
        }

        if(userAndPasswordPresent)
        {
          this.messageService.showSuccessMessage("user loggedin sucessfully")
          this.loginForm.reset()
          this.authService.saveToken(id)
          this.router.navigate(['/'])
        }
        else{
          this.messageService.showErrorMessage("username or password did not matched")
        }

      })
      // this.authService.userLogin(this.loginForm.value).subscribe(res=>{
      //   this.authService.saveToken(res.token)
      //   this.messageService.showSuccessMessage("user logged in sucessfully")
      //   this.loginForm.reset()
      //   this.router.navigate(['/'])

      // },err=>{
      //   let errors = err.error
      //   for(let e in errors )
      //   {
      //     errors[e].forEach((eErrors:any)=>{
      //       this.messageService.showErrorMessage(eErrors);
      //     })
      //   }
      // })
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
