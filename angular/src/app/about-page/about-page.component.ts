import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TranslationService} from "../translation.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  name: string = "Stranger";
  value: string = "";

  constructor(private route: ActivatedRoute, private router: Router, public translationService: TranslationService) {
    route.params.subscribe(params =>{
      this.name = params["name"];
    });
  }

  ngOnInit(): void {
  }

  send(){
    this.router.navigate(["about/" + this.value]);
  }

}
