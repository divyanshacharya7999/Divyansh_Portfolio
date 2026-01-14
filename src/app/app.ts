import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  openTab(tabName: string, event: Event) {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');

    for (let tabLink of tabLinks) {
      tabLink.classList.remove('active-link');
    }
    for (let tabContent of tabContents) {
      tabContent.classList.remove('active-tab');
    }
    (event.currentTarget as HTMLElement).classList.add('active-link');
    document.getElementById(tabName)?.classList.add('active-tab');
  }
}