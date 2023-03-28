import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'post_app';
  postTitle: String = '';
  postDesc: String = '';
  imgUrl: String = '';
  webUrl: String = '';
  getTitle(value: String) {
    this.postTitle = value;
    console.log(this.postTitle);
  }
  getDesc(value: String) {
    this.postDesc = value;
    console.log(this.postDesc);
  }
  getImg(value: String) {
    this.imgUrl = value;
  }
  getLink(value: String) {
    this.webUrl = value;
  }
}
