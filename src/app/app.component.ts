import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from './services/crud.service';
//import{PostService} from './services/old_post.service';
import { Dictator } from './interfaces/dictator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // dictators: Dictator[] = [];
  // constructor(private formBuilder: FormBuilder, private postService: PostService, private getService: GetService) { }
  // title = 'dictators';
  // addDiktatorForm = this.formBuilder.group({
  //   index: number;
  //   firstName: [``, Validators.required],
  //   lastName: [``, Validators.required],
  //   birth: [``, Validators.required],
  //   death: [``, Validators.required],
  //   description: [``, Validators.required],
  //   img: [``, Validators.required],

  // })

  // ngOnInit(): void {
  //  //Getting the dictators from the getService and adding them to the array dictators
  //  this.getService.getDictators().subscribe((dictator: Dictator[]) => {
  //   next: this.dictators = dictator;
  // });
  // }

  // getAPIData() {
  //   this.addDiktatorForm.patchValue({})
  // }



}
