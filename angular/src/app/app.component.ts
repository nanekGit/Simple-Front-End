import { Component } from '@angular/core';
import {TranslationService} from "./translation.service";
import {Languages} from "./languages";
import {HttpClient} from "@angular/common/http";
import {CommentService} from "./comment.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  Languages = Languages;
  start: number = 1;


  constructor(private translationService: TranslationService, private httpClient: HttpClient, private commentService: CommentService) {
    /*
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => console.log(json));
     */

    commentService.getAll().then(value => console.log(value));

    httpClient.get("https://jsonplaceholder.typicode.com/photos").toPromise()
      .then(json => console.log(json));

  }

  alert() {
    alert("Pierwsze");
  }

  alert2() {
    alert("Drugie");
  }

  zero() {
    this.start = 0;
  }

  setLanguage(lang: Languages){
    this.translationService.active = lang;
  }
}
