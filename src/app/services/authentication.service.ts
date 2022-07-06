import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private aAuth: AngularFireAuth) {

    }

    async signOut(): Promise<void>{
        await this.aAuth.signOut();
    }

    signUp(email: string, pw: string): Promise<any> {
        return this.aAuth.createUserWithEmailAndPassword(email, pw);
    }

    signIn(email: string, pw: string): Promise<any> {
        return this.aAuth.signInWithEmailAndPassword(email, pw);
    }

    //Is logged in?
    /*auth(): boolean {
        return this.aAuth.authState !==null;
    }*/

    /*getCurrentUser(): any {
        return this.aAuth.authState;
    }*/
}