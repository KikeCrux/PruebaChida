import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://reqres.in/api/users?page=2%27");
  }
}