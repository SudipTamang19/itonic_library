import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin/service/admin.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookForm:FormGroup
  constructor(private adminService:AdminService, private fb:FormBuilder,private messageService:MessageService) {
    this.bookForm = fb.group({
      title:[''],
      category:[''],
      description:['']
    })
   }

  ngOnInit(): void {
  }

  bookFormSubmit()
  {
    if(this.bookForm.valid)
    {
      this.adminService.addBooksInLocal(this.bookForm.value)
      this.messageService.showSuccessMessage('book added sucessfully')
      this.bookForm.reset()
    }
    
  }

}
