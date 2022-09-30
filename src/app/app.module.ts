import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoFillerComponent } from './to-do/to-do-filler/to-do-filler.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToDoListContainerComponent } from './to-do/to-do-list/to-do-list-container/to-do-list-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ToDoService } from './Shared/Services/to-do.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoFillerComponent,
    ToDoListComponent,
    ToDoListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    MatFormFieldModule,
    MatTabsModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
