import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList:any
  constructor(private adminService:AdminService) {
    this.adminService.getBooks().subscribe(res=>{
      this.bookList = res;
    },
    err=>{
      console.log(err)
    })
   }

  ngOnInit(): void {
  }

}
