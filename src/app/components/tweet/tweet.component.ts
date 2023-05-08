import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  @Input() tweetMessage: string = 'Um salve pra quem tem rabão';

  constructor() {}

  ngOnInit(): void {}
}
