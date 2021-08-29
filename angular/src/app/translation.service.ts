import {Injectable} from '@angular/core';
import en from "../assets/translations/en.json";
import pl from "../assets/translations/pl.json";
import {Languages} from "./languages";

const languages = {
  pl: pl,
  en: en
}

const LANGUAKE_KEY="language";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _active: Languages;

  constructor() {
    //const lang = Cookies.get(LANGUAKE_KEY);
    //const lang = localStorage.getItem(LANGUAKE_KEY);
    const lang = sessionStorage.getItem(LANGUAKE_KEY);
    if (lang) {
      this._active = lang as Languages;
    } else{
      this._active = Languages.EN;
    }
  }

  public set active(value: Languages) {
    this._active = value;
    //Cookies.set(LANGUAKE_KEY, this._active);
    //localStorage.setItem(LANGUAKE_KEY, this._active);
    sessionStorage.setItem(LANGUAKE_KEY, this._active);
  }

  get(key: string): string {
    // @ts-ignore
    const text = languages[this._active][key];

    if(text){
      return text;
    }
    return "";
  }
}
