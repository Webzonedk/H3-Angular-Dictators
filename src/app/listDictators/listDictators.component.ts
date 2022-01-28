import { HandleDictatorsService } from '../services/handle-dictators.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Dictator } from '../interfaces/dictator';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-listDictators',
  templateUrl: './listDictators.component.html',
  styleUrls: ['./listDictators.component.css']
})
export class ListDictatorsComponent implements OnInit {
  // ApiURL: string = "http://localhost:3000/postDictators"
  dictators: Dictator[] = [];
  //ready: boolean = false;

  constructor(private handleDictatorsService: HandleDictatorsService, private crudService: CrudService) {

    this.handleDictatorsService.dictators$.subscribe((dictatorsData: Dictator[]) => {
      next:
      this.dictators = dictatorsData;
      // if (this.dictators.length !== dictatorsData.length) {
      // }

    });

  }


  ngOnInit(): void {
    // this.dictators = this.crudService.getDictatorsArray();
    // //Getting the dictators from the getService and adding them to the array dictators
    // this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
    //   next: this.dictators = dictator;
    //  // console.log(dictator);
    // });

    this.loadDictators();
  }

  loadDictators() {
    this.handleDictatorsService.loadDictators();
  }








  delete(index: number) {
    const test = {'index': index};
    console.log("delete",index);
    this.dictators.splice(index, 1);


    // console.log(index);

    //Use the crudService to execute the deletion
    this.crudService.deleteDictator(index).subscribe(() => {
    });
    // location.reload();

    this.loadDictators();
  }

}



