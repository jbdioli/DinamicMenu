import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreMenuService } from 'src/app/services/core-menu.service';
import { PlanetPage } from 'src/app/pages/planet/planet.page';
import {DummyMenu} from 'src/app/model/dummy-menu.model';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit , OnDestroy {
  selectedPath = '';
  menuSub: Subscription;
  sideMenu: DummyMenu;
  method: any;

  constructor(public menu: CoreMenuService) {}

  ngOnInit() {}

  // Method trigger when the menu is open
  menuOpened() {
    // subscibe to the emitter to get the menu stucture
    this.menuSub = this.menu.details.subscribe((value: DummyMenu) => {
      this.sideMenu = value;
      this.method = this.setMethod(this.sideMenu[0].page);
    });
  }

  setMethod(page: string) {
    let method: any;
    switch (page) {
      case 'PlanetPage':
        method = new PlanetPage(null);
        break;
    }
    return method;
  }

  onCreate() {
    this.method.onCreate();
  }

  onSearch() {
    this.method.onSearch();
  }

  onShare() {
    this.method.onShare();
  }


  // Method trigger when the menu is close
  menuClosed() {
    this.menuSub.unsubscribe();
  }

  ngOnDestroy() {
    this.menuSub.unsubscribe();
  }
}
