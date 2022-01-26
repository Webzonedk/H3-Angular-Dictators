import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetService } from './services/get.service';
import{PostService} from './services/post.service';
import { Dictator } from './interfaces/dictator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  dictators: Dictator[] = [];
  constructor(private formBuilder: FormBuilder, private postService: PostService, private getService: GetService) { }
  title = 'dictators';
  addDiktatorForm = this.formBuilder.group({
    firstName: [``, Validators.required],
    lastName: [``, Validators.required],
    birth: [``, Validators.required],
    death: [``, Validators.required],
    description: [``, Validators.required],
    img: [``, Validators.required],

  })

  ngOnInit(): void {
   //Getting the dictators from the getService and adding them to the array dictators
   this.getService.getDictators().subscribe((dictator: Dictator[]) => {
    next: this.dictators = dictator;
  });
  }

  // getAPIData() {
  //   this.addDiktatorForm.patchValue({})
  // }



}
