import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'communities';
  tagSample = {
    name: 'Test',
    description: 'Lorem ipsum'
  }
}
