import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  usersList:any
  constructor(private adminService:AdminService,private router:Router, private messageService:MessageService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe(res=>{
      this.usersList = res
    },err=>{
      console.log(err)
    })
  }

  deleteUser(id:any)
  {
    const c = confirm(`Are you sure you want to delete user with id ${id} ?`)
    if(c)
    {
      this.adminService.deleteUser(id).subscribe(res=>{
        this.messageService.showSuccessMessage("User deleted sucessfully")
        this.adminService.getUsers().subscribe(res=>{
          this.usersList = res
        },err=>{
          console.log(err)
        })
        
      })
    }
  }

  editUser(id:any)
  {
    this.router.navigate(['/admin/user/edituser/'+id])
  }

  

}
