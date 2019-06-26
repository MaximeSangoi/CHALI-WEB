import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(username: string, password: string): Observable<boolean> {
        const login = ajax({
            url: 'https://localhost:3000/auth/login',
            method: 'POST',
            body: { username, password }
        })

        return of(true).pipe(
            tap(login.subscribe()),
            tap(val => this.isLoggedIn = true)
        );
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}