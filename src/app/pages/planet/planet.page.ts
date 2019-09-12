import { Component, OnInit } from '@angular/core';
import { CoreMenuService } from 'src/app/services/core-menu.service';
import { DummyMenu } from 'src/app/model/dummy-menu.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.page.html',
  styleUrls: ['./planet.page.scss'],
})
export class PlanetPage implements OnInit {

  sideLinks: DummyMenu[] = [new DummyMenu(null, null, 'PlanetPage')];

  constructor( public menu: CoreMenuService ) { }

  ionViewWillEnter() {
    // Create Title and Link that will be display in the menu
    this.menu.details.next(this.sideLinks);
  }

  ngOnInit() {
  }

  // toggle the side menu1
  onOpenMenu() {
    this.menu.toggleMenu1();
  }

  public onCreate() {
    console.log('Created');
  }


  onSearch() {
    console.log('Search');
  }


  onShare() {
    console.log('shared');
  }
}
