import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  imports: [
	CommonModule,
	
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	BrowserAnimationsModule,
	MatGridListModule
  ],
  exports:[
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	BrowserAnimationsModule,
	MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
