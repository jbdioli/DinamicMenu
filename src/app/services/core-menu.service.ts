import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreMenuService {

  public details: ReplaySubject<any> = new ReplaySubject<any>(1);
  // public details = new Subject<any>();

  constructor(public menu: MenuController) { }

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
