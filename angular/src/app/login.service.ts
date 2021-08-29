import { Injectable } from '@angular/core';

const LOGIN_KEY = "login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public login(password: string){
    if(password==="abcde"){
      localStorage.setItem(LOGIN_KEY, "true");
    }
  }

  public logout(){
    localStorage.removeItem(LOGIN_KEY);
    //localStorage.setItem(LOGIN_KEY, "");
  }

  public isLogged(): boolean{
    const item=localStorage.getItem(LOGIN_KEY);
    return !!item;

  }

  constructor() { }
}
