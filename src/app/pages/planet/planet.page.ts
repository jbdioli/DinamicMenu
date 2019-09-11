import { Component, OnInit } from '@angular/core';
import { CoreMenuService } from 'src/app/services/core-menu.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.page.html',
  styleUrls: ['./planet.page.scss'],
})
export class PlanetPage implements OnInit {

  constructor( public menu: CoreMenuService ) { }

  ngOnInit() {
  }

  onOpenMenu() {
    this.menu.toggleMenu1();
  }

  onCreate() {
    console.log('Created');
  }


  onSearch() {
    console.log('Search');
  }


  onShare() {
    console.log('shared');
  }
}
