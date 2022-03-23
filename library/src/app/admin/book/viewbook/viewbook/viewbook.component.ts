import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  booksList:any

  constructor(private adminService:AdminService, private activatedRouter:ActivatedRoute,private router:Router, private messageService:MessageService) { }

  ngOnInit(): void {
    this.adminService.getBooks().subscribe(res=>{
      this.booksList = res;
      const c = this.adminService.checkBook()
      if(c)
      {
        const books = this.adminService.getBooksFromLocal()
        for(let b of books)
        {
          this.booksList.push(b)
        }
      }

    },err=>{
      console.log(err)
    })

  }
  // editBook(id:any)
  // {
  //   this.router.navigate(['/admin/book/editbook/'+id])
  // }

  // deleteBook(id:any){
  //   const c = confirm(`Are you sure do you want to delete book with id ${id} ?`)
  //   if(c)
  //   {
  //     this.adminService.deleteBook(id).subscribe(res=>{
  //       this.messageService.showSuccessMessage("Book deleted sucessfully")
  //       this.adminService.getBooks().subscribe(res=>{
  //         this.booksList = res;
  //         console.log(this.booksList)
    
  //       },err=>{
  //         console.log(err)
  //       })
  //     })
  //   }
  // }

}
