import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyFormData } from './myformdata';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getUrl = "https://cs251-outlab-6.herokuapp.com/initial_values/";
  private postUrl = "https://cs251-outlab-6.herokuapp.com/add_new_feedback/"
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `message was: ${error.message}`);
    }
    return throwError(
      error.message || 'Something bad happened; please try again later.');
  }
  
  getIntialData(): Observable<MyFormData> {
    return this.http.get<MyFormData>(this.getUrl)
    .pipe(
      catchError(this.handleError)
    );
    // return { name: "asffa", email: "asasd@asd.com", comments: "", feedback: "Okay" };
  }

  postData(data: MyFormData): Observable<MyFormData> {
    return this.http.post<MyFormData>(this.postUrl, data)
    .pipe(
      catchError(this.handleError)
    )
  }
}
