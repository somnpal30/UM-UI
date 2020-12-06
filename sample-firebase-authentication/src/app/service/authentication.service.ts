import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState: any;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(auth => {
      this.authState = auth;

    });
  }

  loginWithEmail(email: string, password: string) {

    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        /*  console.log(this.authState.token);
          this.router.navigate(['/secure/myuser']);*/
      })
      .catch(error => {
        //console.log(error)
        throw error
      });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  get token(): string {
    return this.authState.token;
  }
}
