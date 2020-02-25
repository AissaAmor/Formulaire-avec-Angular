import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewService } from './services/new.service';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './Component/formulaire/formulaire.component';
import { GroupeComponent } from './Component/groupe/groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    GroupeComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
