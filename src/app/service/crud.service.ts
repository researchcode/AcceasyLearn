import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {
  }
  //Agregar registro en base de datos
  create_NewGuideline(record) {
    return this.firestore.collection('guidelines').add(record);
  }

  //consultar la base de datos
  read_Guidelines() {
    return this.firestore.collection('guidelines').snapshotChanges();
  }

  //actualizar registro en la base de datos
  update_Guideline(recordID, record) {
    this.firestore.doc('guidelines/' + recordID).update(record);
  }

  //elimiar registr de la base de datos
  delete_Guideline(record_id) {
    this.firestore.doc('guidelines/' + record_id).delete();
  }
}
