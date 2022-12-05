import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Property } from '../shared/models/property.model';
import { Savedad } from '../shared/models/savedads.model';

@Injectable({
  providedIn: 'root'
})
export class FbCrudService {

  constructor(private fs: AngularFirestore) { }

  async add(collectionName: string, data: Property, id?: string): Promise<string> {
    const uid = id ? id : this.fs.createId();
    data.id = uid;
    await this.fs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async addSaved(collectionName: string, data: Savedad, id?: string): Promise<string> {
    const uid = id ? id : this.fs.createId();
    data.id = uid;
    await this.fs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  get(collectionName: string): Observable<Property[]> {
    return this.fs.collection(collectionName).valueChanges() as Observable<Property[]>;
  }

  getSaved(collectionName: string): Observable<Savedad[]> {
    return this.fs.collection(collectionName).valueChanges() as Observable<Savedad[]>;
  }

  getOne(collectionName: string, id: string): Observable<any> {
    return this.fs.collection(collectionName).doc(id).valueChanges();
  }

  queryDescByPrice(collectionName: string): Observable<Property[]> {
    return this.fs.collection(collectionName, ref => {let query: CollectionReference | Query = ref;
    query = query.orderBy("price", "desc");
    return query;
    }).valueChanges() as Observable<Property[]>;
  }

  delete(collectionName: string, id: string) {
    return this.fs.collection(collectionName).doc(id).delete();
  }

  update(collectionName: string, id: string, data: Property) {
    return this.fs.collection(collectionName).doc(id).update(data);
  }
}
