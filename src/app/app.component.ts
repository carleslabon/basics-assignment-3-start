import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class AppComponent {
  detailBoolean = false;
  numbers = [];
  initialNum = 0;

  incNum() {
    this.detailBoolean = !this.detailBoolean;
    this.initialNum += 1;
    this.numbers.push(this.initialNum);
  }

}
