import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreMenuService } from 'src/app/services/core-menu.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit , OnDestroy {
  selectedPath = '';
  menuSub: Subscription;
  sideMenu: any;

  constructor(public menu: CoreMenuService) {}

  ngOnInit() {}

  // Method trigger when the menu is open
  menuOpened() {
    // subscibe to the emitter to get the menu stucture
    this.menuSub = this.menu.details.subscribe((value: any) => {
      this.sideMenu = value;
    });
  }

  // Method trigger when the menu is close
  menuClosed() {
    this.menuSub.unsubscribe();
  }

  ngOnDestroy() {
    this.menuSub.unsubscribe();
  }
}
