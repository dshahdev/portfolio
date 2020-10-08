import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  constructor(private http: HttpClient) {}

  getImageData(): Observable<any> {
    return this.http.get('assets/data/urls.json', httpOptions);
  }
 
  getData(): Observable<any> {
    return this.http.get('assets/data/myData.json', httpOptions);
  }
  getToDoList(): Observable<any> {
    return this.http.get('assets/data/todoList.json', httpOptions);
  }
  getGeneData(): Observable<any> {
    return this.http.get('assets/data/data.json', httpOptions);
  }
}
