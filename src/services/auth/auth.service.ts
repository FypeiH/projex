import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, tap, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../models/person/person.model';
import { UrlService } from '../url/url.service';
import { IAuth } from '../../models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null;
  private personLoggedIn: Person | null;

  constructor(private http: HttpClient, private urlService: UrlService, private toastr: ToastrService) {
    this.token = null;
    this.personLoggedIn = null;

    const savedToken = localStorage.getItem('token');
    const sessionToken = sessionStorage.getItem('token');
    if(savedToken){
      this.token = savedToken;
      this.personLoggedIn = JSON.parse(localStorage.getItem('person')!);
    }
    else if(sessionToken){
      this.token = sessionToken;
      this.personLoggedIn = JSON.parse(sessionStorage.getItem('person')!);
    }
  }

  signup(person: Person): Observable<IAuth> {
    return this.http.post<IAuth>(this.urlService.getURL("person/signup"), person)
    .pipe(tap(result=>{
      this.token = result.token;
      this.personLoggedIn = result.user;
      localStorage.setItem('token', result.token);
      localStorage.setItem('person',JSON.stringify(result.user));
    }),
    catchError((error) => {
      this.toastr.error('Erro ao criar conta', 'Erro');
      return throwError(() => error);
    }));
  }

  login(emailUsername: string, password: string, keepMeSignedIn: boolean): Observable<IAuth> {
    return this.http.post<IAuth>(this.urlService.getURL("authentication/login"), {emailUsername, password})
    .pipe(tap(result=>{
      this.token = result.token;
      this.personLoggedIn = result.user;

      if(keepMeSignedIn){
        localStorage.setItem('token', result.token);
        localStorage.setItem('person',JSON.stringify(result.user));
      }
      else{
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('person', JSON.stringify(result.user));
      }
    }),
    catchError((error) => {
      this.toastr.error('Email ou password inválidos', 'Erro');
      return throwError(() => error);
    }));
  }

  logout(){
    this.token = null;
    this.personLoggedIn = null;
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('person');
    sessionStorage.removeItem('person');
  }

  getToken(){
    return this.token;
  }

  getUser(){
    return this.personLoggedIn;
  }

  isAuthenticated(){
    return this.token != null;
  }

  getCurrentUser(): Person{
    var userString;
    if (localStorage.getItem('person')) {
      userString = localStorage.getItem('person');
    } else {
      userString = sessionStorage.getItem('person');
    }
    
    return userString ? JSON.parse(userString) : null;
  }
}