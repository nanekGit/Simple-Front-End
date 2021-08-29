import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Promise<Comment[]>{
    return this.httpClient.get<Comment[]>("/comments").toPromise();
    //return new Promise<Comment[]>(function () {});
  }
}
