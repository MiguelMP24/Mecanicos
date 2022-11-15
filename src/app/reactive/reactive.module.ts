import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
