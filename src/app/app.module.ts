import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from "@angular/router";
import { SearchComponent } from './search/search.component';
import { MyListComponent } from './my-list/my-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VideoListService} from "./video-list.service";

import {MaterialModule} from "./material.module";


@NgModule({
	declarations: [
    AppComponent,
    SearchComponent,
    MyListComponent,
    VideoDetailComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		MaterialModule,
		RouterModule.forRoot([
		
			{path: "mylist", component:MyListComponent},
			{path: "search/:id", component:SearchComponent},
			{path: "videodetail/:id", component:VideoDetailComponent},
			{path: "", component:SearchComponent, pathMatch: 'full'}
		])

		
  	],
	providers: [HttpClientModule, VideoListService],
	bootstrap: [AppComponent]
})
export class AppModule { }
