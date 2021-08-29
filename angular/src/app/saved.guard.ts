import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "./storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminPageComponent} from "./admin-page/admin-page.component";

@Injectable({
  providedIn: 'root'
})
export class SavedGuard implements CanDeactivate<AdminPageComponent> {

  constructor(private storageService: StorageService, private _snackbar: MatSnackBar) {
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.storageService.edited) {
      component.warm();
      this._snackbar.open("Save Changes","OK");
      return false;
    }
    return true;
  }


}
