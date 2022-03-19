import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TitleShareService {

  private objTitle = new BehaviorSubject<string>('');
  currentTitle = this.objTitle.asObservable();

  constructor() {}

  changeTitle(newTitle: string = '') {
    return this.objTitle.next(newTitle);
  }
}
