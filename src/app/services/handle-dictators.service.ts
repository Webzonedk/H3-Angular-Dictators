import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictator } from '../interfaces/dictator';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDictatorsService {
  dictators$: BehaviorSubject<Dictator[]> = new BehaviorSubject<Dictator[]>([]);
  //dictatorsReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private crudService: CrudService) { }



  loadDictators() {
    let counter;

    this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
      next:
      // this.crudService.dictators = dictator;
      counter = dictator;


      complete:
      this.dictators$.next(dictator);
     // this.dictatorsReady$.next(true);

    });
  }
}
