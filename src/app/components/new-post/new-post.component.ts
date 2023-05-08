import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  sendTweet() {
    this.service.addMessage(this.tweetMessage);
    this.tweetMessage = '';
    this.tweetRemain = this.tweetMaxLength;
    this.service.getMessages;
  }

  changeTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }
  constructor(private service: MessagesService) {}

  ngOnInit(): void {}
}
