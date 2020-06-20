import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Output() sidenavClose = new EventEmitter();

  public closeSidenav(): void {
    this.sidenavClose.emit();
  }
}
