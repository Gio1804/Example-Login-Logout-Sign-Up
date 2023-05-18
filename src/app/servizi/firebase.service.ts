import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPagina1(url:string) {
    return this.http.get(`${url}?auth=${this.authService.user.token}`)
   }

  insertElement(url: string, body: {}) {
    return this.http.post(url, body)
  }

  insertPersona(url: string, body: {}) {
    return this.http.post(url, body)
  }
}
