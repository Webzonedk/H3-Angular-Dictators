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

  constructor(private crudService: CrudService) {
  }


  ngOnInit(): void {
    this.dictators = this.crudService.getDictatorsArray();
    //Getting the dictators from the getService and adding them to the array dictators
    this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
      next: this.dictators = dictator;
     // console.log(dictator);
    });
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

//This has no influence
    this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
      next: this.crudService.dictators = dictator;

     // console.log(dictator);
    });
  }

}



