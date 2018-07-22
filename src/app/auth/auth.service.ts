import {auth} from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService{


    constructor(private router:Router,public afAuth: AngularFireAuth){}

    signupUser(email:string,password:string){
            this.afAuth.auth.createUserWithEmailAndPassword(email,password)
                .catch(error=>console.log(error))
    }

    signinUser(email:string,password:string){
        this.afAuth.auth.signInWithEmailAndPassword(email,password)
        .then(response=>{
            this.router.navigate(['/categories'])  
            }
        )
        .catch(error=>console.log(error))
    }

    getToken(){
        return  this.afAuth.auth.currentUser.getIdToken();
    }

    getCurrentUser(){
        return this.afAuth.user;
    }

    get currentUserObservable(): any {
        return this.afAuth.authState.pipe(first())
    }

    logout(){
        this.afAuth.auth.signOut();
    }
}