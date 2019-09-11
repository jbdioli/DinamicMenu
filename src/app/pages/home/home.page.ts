import { Component, OnInit } from '@angular/core';
import { DummyMenu } from 'src/app/model/dummy-menu.model';
import { CoreMenuService } from 'src/app/services/core-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Create Title and Link that will be display in the menu
  sideLinks: DummyMenu[] = [new DummyMenu('Go to page Boat', 'menu/displayPage/BoatPage'),
                            new DummyMenu ('Go to page Person', 'menu/displayPage/PersonPage')];

  constructor(public menu: CoreMenuService) {}

  ionViewWillEnter() {
    // Create Title and Link that will be display in the menu
    this.menu.details.next(this.sideLinks);
  }

  ngOnInit() {}

}
