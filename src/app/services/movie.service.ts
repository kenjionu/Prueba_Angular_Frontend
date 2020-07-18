import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './../interface/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  SERVER_URL: string = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    
   }

   public getMovies(){ 
    return this.httpClient.get(this.SERVER_URL + '/movies' );
}

public getMoviesId(id){
    return this.httpClient.get(`${this.SERVER_URL + '/movies'}/${id}`); 
}

public deleteMovie(id){
  return this.httpClient.delete(`${this.SERVER_URL + '/movie/delete'}/${id}`)

}

public updateMovie(movieId: any, movie){
  return this.httpClient.put(`${this.SERVER_URL + '/movie/update'}/${movieId}`, movie)
}

public addMovie(movie): Observable<Movie> {
  return this.httpClient.post<Movie>(this.SERVER_URL + '/movie/add', JSON.stringify(movie), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}  

errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
// public addMovie(nombre: string, fecha_pub: string, imagen:string, estado:string) {
//   const movie = { nombre, fecha_pub, imagen, estado };
//   return this.httpClient.post(this.SERVER_URL, movie)
// }



// public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
//    return this.httpClient.post(`${this.SERVER_URL + 'policies'}`, policy)
// }

// public deletePolicy(policyId){
//    return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
// }
// public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
//    return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
// }
  //  getMovies(){
  //   const promise = new Promise((resolve, reject) => {
  //     const apiURL = this.moviesUrl;
  //     this.http
  //       .get<Movie[]>(apiURL)
  //       .toPromise()
  //       .then((res: any) => {
  //         // Success
  //         this.data = res.map((res: any) => {
  //           return new Movie(
  //             res.userId,
  //             res.id,
  //             res.title,
  //             res.body
  //           );
  //         });
  //         resolve();
  //       },
  //         err => {
  //           // Error
  //           reject(err);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  //  getMovies(): Promise<Movie[]> {
  //   return this.http.get(this.moviesUrl)
  //       .toPromise()
  //       .then(response => response.json().data)
  //       .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }
}
