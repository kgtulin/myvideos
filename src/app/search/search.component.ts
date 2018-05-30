import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VideoListService} from "../video-list.service";


declare function alert(any);
declare let API_URL;
declare let API_KEY;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{


	title = 'app';		
	queryString="Rocky";
	public year="";
	resultData=null;
	autoComplitResult=null;
	
	test="";

	response=null;

	constructor(private http: HttpClient, private videoList: VideoListService)
	{
		let ob={};
	}


	queryComplit(data)
	{
		this.resultData=data;
	}



	autoComplit(obj)
	{
		if(obj.Error)
			this.autoComplitResult=null;
		else
		{
			this.autoComplitResult=obj;
			//document.getElementById("autoComplit").style.display='block';
		}
	}


	queryAutoComplit()
	{
		let url=API_URL+"?apikey="+API_KEY+"&t="+this.queryString;
		this.http.get(url).subscribe( (response)=>(this.autoComplit(response)));
	}


	querySearch(text:string, yery:number)
	{
		let url=API_URL+"?apikey="+API_KEY+"&t="+this.queryString;
		this.http.get(url).subscribe( (response)=>(this.queryComplit(response)));
	}


  ngOnInit() {
  }

}

