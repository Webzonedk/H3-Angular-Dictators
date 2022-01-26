import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dictator } from '../interfaces/dictator';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  ApiURL: string ="http://localhost:3000/postDictators"
  constructor(private http: HttpClient) { }

  postDictator(dataToApi:any){
    return this.http.post<any>(this.ApiURL, dataToApi)
  }

  deleteDictator(i:any){
    return this.http.delete<Dictator[]>(this.ApiURL, i)
  }

}
