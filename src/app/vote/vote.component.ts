import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  voters = ['ვოვა ვეკუა', 'მერაბ კოსტავა', 'ზვიად გამსახურდია', 'ედუარდ შევარდნაძე'];

  agree: number = 0;
  disAgree: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onVoted(agreed: boolean) {
    if (agreed) {
    this.agree++
    } else {
      this.disAgree++
    }
  }
}
