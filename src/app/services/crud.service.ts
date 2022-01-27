import { Dictator } from '../interfaces/dictator'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CrudService {
  //Creating an array to keep the dictators behind bars
  dictators: Dictator[] = [];
//The url for the API
  ApiURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) {

  }

  //Service with observable, to provide data from the Json file with the dictators
  getDictators(): Observable<Dictator[]> {
    return this.http.get<Dictator[]>(this.ApiURL+`/getDictators`);
  }

  postDictator(dataToApi: any) {
    return this.http.post<any>(this.ApiURL+`/postDictators`, dataToApi)
  }

  deleteDictator(i: any) {
    return this.http.delete<any>(this.ApiURL+`/deleteDictators/${i}`, i)
  }

  updateDictator(){
    //Not implemented
  }

  getDictatorsArray() {
    return this.dictators.slice();
  }

}
