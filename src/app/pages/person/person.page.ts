import { Component, OnInit } from '@angular/core';
import { DummyMenu } from 'src/app/model/dummy-menu.model';
import { CoreMenuService } from 'src/app/services/core-menu.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  // Create Title and Link that will be display in the menu
  sideLinks: DummyMenu[] = [new DummyMenu('Go to page Planet', 'menu/displayPage/PlanetPage')];


  constructor( public menu: CoreMenuService ) {}

  ngOnInit() {

    // Create Title and Link that will be display in the menu
    this.menu.details.next(this.sideLinks);

  }

}
