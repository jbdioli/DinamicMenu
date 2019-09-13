import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoreMenuService {

  public details: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public menu: MenuController) { }

  // Hide all menu
  public toggleMenuOFF() {
    this.menu.enable(false, 'slidingMenu');
    this.menu.enable(false, 'slidingMenu1');
  }

  // Toggle the Menu and hide the one you do not need
  public toggleMenu() {
    this.menu.enable(true, 'slidingMenu');
    this.menu.enable(false, 'slidingMenu1');
    this.menu.toggle('slidingMenu');
  }

  // Toggle the Menu1 and hide the one you do not need
  public toggleMenu1() {
    this.menu.enable(false, 'slidingMenu');
    this.menu.enable(true, 'slidingMenu1');
    this.menu.toggle('slidingMenu1');
  }


}
