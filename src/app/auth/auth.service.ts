import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../servizi/model/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIKey = environment.firebaseAPIkey
  registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
  isLoggedIn = false
  user!: User

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated() {
    return this.isLoggedIn
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.router.navigate(['/pagina1'])
    return this.user = new User(email, id, token, expirationDate)    
   
  }

  register(email: string, password: string) {
    return this.http.post(this.registerURL, { email: email, password: password, returnSecureToken: true })
  }

  signIn(email: string, password: string) {
    return this.http.post(this.signInURL, { email: email, password: password, returnSecureToken: true })
    this.router.navigate(['/pagina1'])
  }

  logOut() {
    this.isLoggedIn = false
    this.user != null
    localStorage.removeItem('user')
    this.router.navigate(['/login'])

  }
}
