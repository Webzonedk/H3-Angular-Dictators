import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetService } from '../services/get.service';
import { PostService } from '../services/post.service';
import { Dictator } from '../interfaces/dictator';

@Component({
  selector: 'app-editDictator',
  templateUrl: './editDictator.component.html',
  styleUrls: ['./editDictator.component.css']
})
export class EditDictatorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private postService: PostService, private getService: GetService) { }

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


  submit() {
    this.postService.postDictator(this.addDiktatorForm.value).subscribe(() => { })

    location.reload();
  }

}
