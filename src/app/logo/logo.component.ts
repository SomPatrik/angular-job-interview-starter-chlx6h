import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {

  @Input() width:number = 400;
  public counter = 0;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  clicked(): void {
    this.countChange.emit(++this.counter);
  }
}