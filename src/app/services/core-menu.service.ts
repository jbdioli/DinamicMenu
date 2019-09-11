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

  settleMenu(value: any) {
    this.details.next(value);
  }
}
