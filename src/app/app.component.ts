import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

declare function alert(any);

	@Component({
	selector: 'app-root',	
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})

	export class AppComponent {

		static BASE_URL="http://www.omdbapi.com/";
		static KEY="5bcfa132";

		title = 'app';		
		queryString="";
		public year="";

		response=null;

		constructor(private http: HttpClient, private router: Router)
		{
		}

		
		querySearch(text:string, yery:number)
		{
			let url=AppComponent.BASE_URL+"?apikey="+AppComponent.KEY+"&t="+this.queryString+"&y="+this.year;
			this.http.get(url).subscribe( (response)=>(console.log(response)));
		}
}
