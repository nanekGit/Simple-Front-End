import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { HidePanelComponent } from './hide-panel/hide-panel.component';
import {TranslationService} from "./translation.service";
import {RouterModule, Routes} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginGuard} from "./login.guard";
import {SavedGuard} from "./saved.guard";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./comment.service";
import { CommentsPageComponent } from './comments-page/comments-page.component';

const routes: Routes = [
  {
    path: "about/:name",
    component: AboutPageComponent
  },
  {
    path: "about",
    redirectTo: "about/Stranger"
  },
  {
    path: "contact",
    component: ContactPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "admin",
    component: AdminPageComponent,
    canActivate: [LoginGuard],
    canDeactivate: [SavedGuard]
  },
  {
    path: "comments",
    component: CommentsPageComponent
  },
  {
    path: "",
    component: MainPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClickCounterComponent,
    HidePanelComponent,
    MainPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    CommentsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [TranslationService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
