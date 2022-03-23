import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  registerForm: any;

  constructor(private fb: FormBuilder,private adminService:AdminService, private authService:AuthService,private messageService:MessageService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.registerForm = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      isAdmin:['']
    })
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.adminService.getSingleUser(id).subscribe(res=>{
      this.registerForm.controls['username'].setValue(res.username)
      this.registerForm.controls['email'].setValue(res.email)
      this.registerForm.controls['isAdmin'].setValue(res.isAdmin)  

    },err=>{
      this.messageService.showErrorMessage(`User with id ${id} didnot found`)
      this.router.navigate(['/admin/user/viewuser'])
    })

  }
  get rfControls() {
    return this.registerForm.controls;
  }

  registerFormSubmit() {
    if (this.registerForm.valid) {
      const id = this.activatedRoute.snapshot.params['id']
      const ia = this.registerForm.value['isAdmin']
      let isAdmin = false
      if(ia==="true")
      {
        isAdmin=true
      }
      const data = {
        username:this.registerForm.value['username'],
        email:this.registerForm.value['email'],
        isAdmin:isAdmin
      }
      this.adminService.updateUser(id,data).subscribe(res => {
        this.messageService.showSuccessMessage("user details updated sucessfully")
        this.registerForm.reset()
        this.router.navigate(['/admin/user/viewuser'])

      }
      
      )
    }
  }

}
