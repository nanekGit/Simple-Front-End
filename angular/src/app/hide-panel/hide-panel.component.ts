import { Component } from '@angular/core';
import {TranslationService} from "../translation.service";

@Component({
  selector: 'app-hide-panel',
  templateUrl: './hide-panel.component.html',
  styleUrls: ['./hide-panel.component.css']
})
export class HidePanelComponent{

  show: boolean=false;

  constructor(private translationService: TranslationService) {
  }

  getText(){
    if(this.show){
      return this.translationService.get("hide");
    }
    return this.translationService.get("show");
  }

}
