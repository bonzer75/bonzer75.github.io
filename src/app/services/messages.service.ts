import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private api_server = "https://angular-portfolio-database.herokuapp.com/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get(this.api_server)
  }

  public saveMessage(m: any): Observable<any>{
    return this.http.post(this.api_server, m);
  }
}