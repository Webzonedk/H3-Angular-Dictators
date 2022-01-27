import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dictator } from '../interfaces/dictator';
import { CrudService } from '../services/crud.service';
//import { PostService } from '../services/old_post.service';

@Component({
  selector: 'app-listDictators',
  templateUrl: './listDictators.component.html',
  styleUrls: ['./listDictators.component.css']
})
export class ListDictatorsComponent implements OnInit {
  public dictators: Dictator[] = [];
  ApiURL: string ="http://localhost:3000/postDictators"

  constructor(private crudService: CrudService) {
  }


  ngOnInit(): void {
    //Getting the dictators from the getService and adding them to the array dictators
    this.crudService.getDictators().subscribe((dictator: Dictator[]) => {
      next: this.dictators = dictator;

      console.log(dictator);


    });
  }



  delete(index: number) {

    this.crudService.deleteDictator(index).subscribe(() => {

     });


    this.dictators.splice(index, 1);

        location.reload();
  }

}
