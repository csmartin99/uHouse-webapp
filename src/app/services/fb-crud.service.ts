import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Property } from '../shared/models/property.model';
import { Savedad } from '../shared/models/savedads.model';
import { User } from '../shared/models/user.model';

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

  async addUser(collectionName: string, data: User, id?: string): Promise<string> {
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

  getUser(collectionName: string): Observable<User[]> {
    return this.fs.collection(collectionName).valueChanges() as Observable<User[]>;
  }

  getOne(collectionName: string, id: string): Observable<any> {
    return this.fs.collection(collectionName).doc(id).valueChanges();
  }

  getOneUser(collectionName: string, username: string): Observable<User[]> {
    return this.fs.collection(collectionName, ref => {let query: CollectionReference | Query = ref;
      query = query.where("username", "==", username);
      return query;
      }).valueChanges() as Observable<User[]>;
  }

  getProperyOfUser(collectionName: string, useremail: string): Observable<Property[]> {
    return this.fs.collection(collectionName, ref => {let query: CollectionReference | Query = ref;
      query = query.where("seller", "==", useremail);
      return query;
      }).valueChanges() as Observable<Property[]>;
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

  updateLike(collectionName: string, id: string, data: number) {
    return this.fs.collection(collectionName).doc(id).update({like: data});
  }

  updateDislike(collectionName: string, id: string, data: number) {
    return this.fs.collection(collectionName).doc(id).update({dislike: data});
  }

  updateReport(collectionName: string, id: string, data: number) {
    return this.fs.collection(collectionName).doc(id).update({report: data});
  }

  updateComment(collectionName: string, id: string, data: string[]) {
    return this.fs.collection(collectionName).doc(id).update({comments: data});
  }
}
