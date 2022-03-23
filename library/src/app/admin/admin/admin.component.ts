import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public showUser:boolean = false;
  public showProduct:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  userToggle()
  {
    this.showUser = !this.showUser
  }
  productToggle()
  {
    this.showProduct = !this.showProduct
  }

}
