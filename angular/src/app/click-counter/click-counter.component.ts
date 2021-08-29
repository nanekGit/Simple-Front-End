import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {TranslationService} from "../translation.service";

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit, OnChanges{
  @Input()
  public count: number = 0;

  @Output()
  public countChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public step: number | undefined;

  @Input()
  public limit: number | undefined;

  @Output()
  public onLimit: EventEmitter<void> = new EventEmitter<void>();

  constructor(public translationService: TranslationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    //this.count = this.count ? this.count : 0;
  }

  click(event: MouseEvent) {
    //console.log(event);

    if(this.limit){
      if(this.count>=this.limit){
        this.onLimit.emit();
        return;
      }
    }

    if(!this.step){
      this.step=1;
    }
    this.count+=this.step;
    this.countChange.emit(this.count);
  }

}
