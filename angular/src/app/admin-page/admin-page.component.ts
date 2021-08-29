import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../translation.service";
import {StorageService} from "../storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  value: string = "";
  color: string = "primary";

  constructor(public translationService: TranslationService, public storageService: StorageService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.value = this.storageService.get();
  }

  save() {
    this.color = "primary";
    this.storageService.save(this.value);
    this._snackbar.open("Saved!","OK");
  }

  warm(){
    this.color = "warm";
  }
}
