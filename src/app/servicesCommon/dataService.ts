import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenName } from '@angular/compiler';

@Injectable()
export class DataService {
    constructor(private http: HttpClient,private _router: Router) { }
    post(url: string, data: any, params?: any): Observable<Response> {
        //debugger;
        return this.doPost(url, data, false, params);
    }
    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options = { };


        return this.http.post(url, data, options)
            .pipe(
                map((res: Response) => {
                    return res;
                }),
                catchError(this.handleError)
            );
    }
    private handleError(error: any) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client side network error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend - ' +
                `status: ${error.status}, ` +
                `statusText: ${error.statusText}, ` +
                `message: ${error.error.message}`);
        }


        // return an observable with a user-facing error message
        return throwError(error || 'server error');
    }
}


