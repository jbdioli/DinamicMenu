import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { CoreService } from 'src/app/core/core.service';

export interface MenuLink {
  title: string;
  linkHref: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(public menu: MenuService, public core: CoreService) {}

  public navToPage(link: MenuLink) {
    console.log('Navigating to: ', link.linkHref);
   // this.core.navToPage(link.linkHref);
  }



  ngOnInit() {}

}
