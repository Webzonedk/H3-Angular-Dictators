import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListDictatorsComponent } from './listDictators/listDictators.component';
import { EditDictatorComponent } from './editDictator/editDictator.component';

@NgModule({
  declarations: [		
    AppComponent,
      ListDictatorsComponent,
      EditDictatorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
