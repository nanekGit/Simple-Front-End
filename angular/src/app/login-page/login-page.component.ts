import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../translation.service";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  password: string = "";

  constructor(public loginService: LoginService, public translationService: TranslationService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.password);
  }

  logout() {
    this.loginService.logout();
  }

  isLogged(): boolean {
    return this.loginService.isLogged();
  }
}
