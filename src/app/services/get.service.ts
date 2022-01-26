import { Dictator } from '../interfaces/dictator'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetService {

  ApiURL: string ="http://localhost:3000/getDictators"
  constructor(private http: HttpClient) {

  }

//Service with observable, to provide data from the Json file with the tweets
getDictators(): Observable<Dictator[]> {
  return this.http.get<Dictator[]>(this.ApiURL);
}
  // getDictators(dataFromApi:any){
  //   return this.http.get<any>(this.ApiURL, dataFromApi)
  // }

}
