import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url
  constructor(private http:HttpClient) { }


 
  //saving token in the local storage
  //since the json server doesnot generate token I will be using user id as a token
  saveToken(id:any){
    localStorage.setItem('token',id)
  }

  checkToken():boolean
  {
    const tok = localStorage.getItem('token')
    if(tok)
    {
      return true
    }
    else
    {
     return false; 
    }
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken()
  {
    localStorage.removeItem('token')
  }

  // user register service
  userRegister(data:any):Observable<any>
  {
    return this.http.post(this.url+'user',data)
  }

  

}
