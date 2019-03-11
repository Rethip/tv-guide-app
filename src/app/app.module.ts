import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { GuideService } from './guide.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowsearchComponent } from './showsearch/showsearch.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    ShowsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports: [
   FormsModule,
   ReactiveFormsModule,
   MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],

  providers: [GuideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
