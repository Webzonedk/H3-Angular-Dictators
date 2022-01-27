import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { Dictator } from '../interfaces/dictator';

@Component({
  selector: 'app-editDictator',
  templateUrl: './editDictator.component.html',
  styleUrls: ['./editDictator.component.css']
})
export class EditDictatorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private crudService: CrudService) {
   }

  title = 'dictators';
  addDiktatorForm = this.formBuilder.group({
   // index:[this.crudService.dictators.length],
    firstName: [``, Validators.required],
    lastName: [``, Validators.required],
    birth: [``, Validators.required],
    death: [``, Validators.required],
    description: [``, Validators.required],
    image: [``, Validators.required],
  })

  ngOnInit(): void {
  }


  submit() {
    this.crudService.postDictator(this.addDiktatorForm.value).subscribe((dictator: Dictator[]) => {
      next: this.crudService.dictators = dictator;

     });


  }

}


