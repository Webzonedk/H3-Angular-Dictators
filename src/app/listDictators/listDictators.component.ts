import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dictator } from '../interfaces/dictator';
import { GetService } from '../services/get.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-listDictators',
  templateUrl: './listDictators.component.html',
  styleUrls: ['./listDictators.component.css']
})
export class ListDictatorsComponent implements OnInit {
  dictators: Dictator[] = [];
  ApiURL: string ="http://localhost:3000/postDictators"
  constructor(private getService: GetService, private postService: PostService) {

  }


  ngOnInit(): void {
    //Getting the dictators from the getService and adding them to the array dictators
    this.getService.getDictators().subscribe((dictator: Dictator[]) => {
      next: this.dictators = dictator;

      console.log(dictator);


    });
  }



  delete(index: number) {

    this.postService.deleteDictator(index).subscribe(() => {

     });


    this.dictators.splice(index, 1);

        location.reload();
  }

}
