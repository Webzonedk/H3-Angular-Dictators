import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Dictator } from '../interfaces/dictator';
import { HandleDictatorsService } from '../services/handle-dictators.service';

@Component({
  selector: 'app-editDictator',
  templateUrl: './editDictator.component.html',
  styleUrls: ['./editDictator.component.css']
})

export class EditDictatorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private handleDictatorsService: HandleDictatorsService) {
   }

  title = 'dictators';
  addDiktatorForm = this.formBuilder.group({
    firstName: [``, Validators.required],
    lastName: [``, Validators.required],
    birth: [``, Validators.required],
    death: [``, Validators.required],
    description: [``, Validators.required],
    image: [``, Validators.required],
  })

  ngOnInit(): void {
  }

//Use the crudService to post the dictator from the form
  submit() {
    this.crudService.postDictator(this.addDiktatorForm.value).subscribe((dictator: Dictator[]) => {
     // next: this.crudService.dictators = dictator;

     });

    this.handleDictatorsService.loadDictators();

  }


  updateDictators(){
 //   this.handleDictatorsService.loadDictators();

  }

}


