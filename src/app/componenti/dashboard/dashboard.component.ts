import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private authService:AuthService){}
  
  ngOnInit(): void {}

  onLogout(){
    this.authService.logOut()
  }

  

}
