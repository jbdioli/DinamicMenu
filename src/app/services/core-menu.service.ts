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

  public toggleMenu() {
    this.menu.enable(true, 'slidingMenu');
    this.menu.enable(false, 'slidingMenu1');
    this.menu.enable(false, 'slidingMenu2');
    this.menu.toggle('slidingMenu');
  }

  public toggleMenu1() {
    this.menu.enable(false, 'slidingMenu');
    this.menu.enable(true, 'slidingMenu1');
    this.menu.enable(false, 'slidingMenu2');
    this.menu.toggle('slidingMenu1');
  }

  public toggleMenu2() {
    this.menu.enable(false, 'slidingMenu');
    this.menu.enable(false, 'slidingMenu1');
    this.menu.enable(true, 'slidingMenu2');
    this.menu.toggle('slidingMenu2');
  }
}
