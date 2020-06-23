import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9 App';

  pageSelected = 'recipe';

  onNavigate(page: string) {
    this.pageSelected = page;
  }
}
