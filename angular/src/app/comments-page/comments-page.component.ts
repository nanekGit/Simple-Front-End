import { Component, OnInit } from '@angular/core';
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  constructor(public commentService: CommentService) { }

  ngOnInit(): void {
  }

}
