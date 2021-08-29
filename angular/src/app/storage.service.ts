import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _edited = false;

  get edited(): boolean {
    return this._edited;
  }

  set edited(value: boolean) {
    this._edited = value;
  }

  save(value: string){
    localStorage.setItem("value", value);
    this.edited = false;
  }

  get():string{
    const value = localStorage.getItem("value");
    return value ? value : "";
  }
}
