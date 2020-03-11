import { Component } from '@angular/core';

import { CrudService } from './../service/crud.service';
import { RouterLinkDelegate } from '@ionic/angular';
//import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  guidelines: any;
 

  //constructor(private crudService: CrudService, public route: RouterLinkDelegate) {}
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Guidelines().subscribe(data => {
 
      this.guidelines = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          principle: e.payload.doc.data()['principle'],
          guideline: e.payload.doc.data()['guideline'],
          criterion: e.payload.doc.data()['criterion'],
          description: e.payload.doc.data()['description'],          
        };
      })
      console.log(this.guidelines);
 
    });
  }

  /*sendDetail(event, item){
    this.route.navigate(
     'criterion-detail',
      {item:item});

  }
  */

}
