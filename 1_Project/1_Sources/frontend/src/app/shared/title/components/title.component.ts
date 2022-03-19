import { Component, OnInit, OnDestroy } from '@angular/core';

// Servicios
import { TitleShareService } from '../services/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy {
  public title: string;

  private observables = new Array();

  constructor(
    private titleShareService: TitleShareService
  ) {     
    this.title = 'Sin definir titulo';

    this.observables = [];
  }

  ngOnInit(): void {
    this._getTitle();
  }

  ngOnDestroy() {
    for (const ob of this.observables) {
      if (ob !== undefined && ob !== null) {
        ob.unsubscribe();
      }
    }
  }  

  _getTitle() {
    const ob = this.titleShareService.currentTitle.subscribe((title: string) => {
      this.title = title;
    });

    this.observables.push(ob);
  }

}
