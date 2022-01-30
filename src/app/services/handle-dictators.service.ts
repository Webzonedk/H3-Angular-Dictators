import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictator } from '../interfaces/dictator';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDictatorsService {
  dictators$: BehaviorSubject<Dictator[]> = new BehaviorSubject<Dictator[]>([]);
  
  /* KBK:Hvis du selv vil styre hvornår data skal opdateres, f.eks, ved meget store datamængder,
        Såsubscribe til en dirtyData$ observable i din handle-service, og opdater kun, hvis den observer er true.
        Jeg har udkommenteret den her, da loadDictator sker i complete observeren for hhv. PostDicttor og DeleteDictator
  */
  //dirtyData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  //dictatorsReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private crudService: CrudService) { }

  /* KBK: Lad din handler lave arbejdet med webapi'et */

  /* Når man poster en record, og ikke forventer noget tilbage, er 
     subscribe-metoden tom. Metoden er dog stadig nødvendig at kalde.
     Hvis dit webapi intet returnerer og dine 
     observers 'next:' og 'complete' er aktiveret med =>, så 'hænger'
     de 2 observers og venter på data. Derfor blev din observable
     'dictators$' aldrig opdateret.
     
  */ 
  postDictators(values: any) {
    this.crudService.postDictator(values).subscribe(() => {
      complete:
      console.debug("complete - postDictators")
      this.loadDictators();
      //this.dirtyData$.next(true);
    })
  }

  /*
  KBK: Lad din handler service tage sig af webapi klad
  */
  deleteDictator(index: number) {
    this.crudService.deleteDictator(index).subscribe(() => {
      complete:
      console.debug("complete - deleteDictators")
      this.loadDictators();
      //this.dirtyData$.next(true);
    })
  }
  /*
  KBK: Jeg har blot tilføjet lidt console.logs så jeg kunne se værdierne
      Du kan slette dem hvis du vil.
  */
  loadDictators() {
    let counter;
    console.debug('loadDictators')
    this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
      next:
      console.debug('dictators', dictator)
      // this.crudService.dictators = dictator;
      counter = dictator;


      complete:
      console.debug('complete')
      this.dictators$.next(dictator);
      //this.dirtyData$.next(false);
     // this.dictatorsReady$.next(true);

    });
  }
}
