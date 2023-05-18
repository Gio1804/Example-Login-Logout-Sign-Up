import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { User } from 'src/app/servizi/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup
  singUpform!: FormGroup


  constructor(private firebase: FirebaseService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      Email: new FormControl(null),
      Password: new FormControl()
    })
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.authService.signIn(email, password).subscribe((data: any) => {
      console.log(data)

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))

      console.log(this.authService.user)
    })
    form.reset()

  }

  signUp(){
    this.router.navigate(['/register'])
    
  }

}






