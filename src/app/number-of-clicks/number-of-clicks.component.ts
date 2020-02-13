import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-number-of-clicks',
  templateUrl: './number-of-clicks.component.html',
  styleUrls: ['./number-of-clicks.component.css'],
})
export class NumberOfClicksComponent implements OnInit {
  @Input() numberOfClicks: number;

  constructor() { }

  ngOnInit() {
  }

}