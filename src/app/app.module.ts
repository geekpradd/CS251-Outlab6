import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon"; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
