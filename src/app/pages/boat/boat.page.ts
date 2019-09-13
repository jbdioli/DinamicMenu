import { Component, OnInit } from '@angular/core';
import { CoreMenuService } from 'src/app/services/core-menu.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.page.html',
  styleUrls: ['./boat.page.scss'],
})
export class BoatPage implements OnInit {

  constructor( public menu: CoreMenuService ) { }

  ionViewWillEnter() {
    // hide all side menu
    this.menu.toggleMenuOFF();
  }

  ngOnInit() {
  }

}
