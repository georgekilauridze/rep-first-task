import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.css']
})
export class VoterChildComponent implements OnInit {

  @Input() voter!: string;

  @Output() voted = new EventEmitter();
  
  didVoted: boolean = false;
  
  constructor(private eL: ElementRef) { 
    this.eL.nativeElement.style.background = 'red'
  }

  ngOnInit(): void {
  }
  vote(agreed: boolean): void {
    this.didVoted = true;
    this.voted.emit(agreed);
  }
}
