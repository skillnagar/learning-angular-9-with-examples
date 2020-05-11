import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';

  author: string = "skillnagar";

  getViews(): string {

    return Math.floor((Math.random() * 10) + 1) + "M";

  }


}
