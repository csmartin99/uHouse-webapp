import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authState: any = null;
    constructor(private aAuth: AngularFireAuth) {
        this.aAuth.authState.subscribe( authState => {
            this.authState = authState;
        });
    }

    user = this.aAuth.authState;

    async signOut(): Promise<void>{
        await this.aAuth.signOut();
    }

    signUp(email: string, pw: string): Promise<any> {
        return this.aAuth.createUserWithEmailAndPassword(email, pw);
    }

    signIn(email: string, pw: string): Promise<any> {
        return this.aAuth.signInWithEmailAndPassword(email, pw);
    }

    get isAuthenticated(): boolean {
        return this.authState != null;
    }

    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : null;
    }

    get userData(): any {
        if (this.isAuthenticated) {
            return this.authState.email;
        }
    }

    //Is logged in?
    /*auth(): boolean {
        return this.aAuth.authState !==null;
    }*/

    /*getCurrentUser(): any {
        return this.aAuth.authState;
    }*/
}