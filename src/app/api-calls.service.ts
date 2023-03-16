import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // Create
  createData(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'data', data);
  }

  // Read
  getData(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'data/' + id);
  }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'data');
  }

  // Update
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'data/' + id, data);
  }

  // Delete
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'data/' + id);
  }
}
