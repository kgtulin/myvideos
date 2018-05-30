import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from "@angular/common/http";

declare let API_URL;
declare let API_KEY;


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

	id=null;
	videoData=null;		

	constructor(activeRoute: ActivatedRoute, private http: HttpClient)
	{
		this.id=activeRoute.snapshot.params["id"];
	}


	onDataLoad(data)
	{
		this.videoData=data;
	}

	ngOnInit()
	{
		let url=API_URL+"?apikey="+API_KEY+"&i="+this.id;
		this.http.get(url).subscribe( (response)=>(this.onDataLoad(response)));
	}

}
