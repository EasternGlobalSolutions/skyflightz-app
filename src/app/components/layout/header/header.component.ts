import { Component } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentTab = 'Home';
  changeActiveTab(value: string) {
    this.currentTab = value;
  }
}
