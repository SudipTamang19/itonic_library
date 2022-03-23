import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url= environment.url
  constructor(private http:HttpClient) { 

  }
  getUsers():Observable<any>
  {
    return this.http.get(this.url+'user')
  }

  getSingleUser(id:any):Observable<any>{
    return this.http.get(this.url+'user/'+id)
  }

  updateUser(id:any,data:any):Observable<any>{
    return this.http.patch(this.url+'user/'+id,data)
  }

  deleteUser(id:any)
  {
    return this.http.delete(this.url+'user/'+id)
  }

  

  getBooks():Observable<any>
  {
    return this.http.get(this.url+'book')
  }
  getSingleBook(id:any):Observable<any>
  {
    return this.http.get(this.url+'book/'+id)
  }

  deleteBook(id:any)
  {
    return this.http.delete(this.url+'book/'+id)
  }

  // addingbooks in local storage

  

  addBooksInLocal(data:any)
  {
    if(localStorage.getItem("books"))
    {
      
      let booksArray = JSON.parse(localStorage.getItem('books') || '[]')
      const bookLen = booksArray.length
      data["id"] = bookLen+100
      booksArray.push(data)

      localStorage.setItem('books',JSON.stringify(booksArray))
      
    }
    else{
      let d = []
      data["id"]=100
      d.push(data)
      localStorage.setItem("books",JSON.stringify(d))

    }
  }

  checkBook()
  {
    const book = localStorage.getItem("books")
    if(book)
    {
      return true
    }
    else{
      return false
    }
  }

  getBooksFromLocal()
  {
    let booksArray = JSON.parse(localStorage.getItem('books') || '[]')
    return booksArray;
  }

}
