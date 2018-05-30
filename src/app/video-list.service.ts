import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

declare let API_URL;
declare let API_KEY;


@Injectable()
export class VideoListService
{
	videoList=[];
	idList=[];
	

	constructor(private http:HttpClient)
	{
		let str=localStorage.getItem("viewList");
		if(!str)return;

		this.idList=str.split("&");
		this.loadVideo(0);
	}


	loadVideo(index)
	{
		if(index>=this.idList.length)return;

		let id=this.idList[index];

		let url=API_URL+"?apikey="+API_KEY+"&i="+id;
		this.http.get(url).subscribe( (response)=>{this.videoList.push(response); this.loadVideo(index+1)});
	}

	getVideos()
	{
		return(this.videoList);
	}


	checkVideo(video)
	{
		for(let i=0; i<this.videoList.length; i++)
			if(this.videoList[i].imdbID==video.imdbID)
				return(true);
		return(false);
	}


	addVideo(video)
	{
		if(this.checkVideo(video))return;
		this.videoList.push(video);
		this.writeToStorage();
	}


	removeVideo(video)
	{
		for(let i=0; i<this.videoList.length; i++)
			if(this.videoList[i].imdbID==video.imdbID)
			{
				this.videoList.splice(i, 1);
				break;
			}
		this.writeToStorage();
	}
	

	writeToStorage()
	{
		let result="";
		for(let i=0; i<this.videoList.length; i++)
		{
			result+=this.videoList[i].imdbID;
			if(i<this.videoList.length-1)
				result+="&";
		}

		localStorage.setItem("viewList", result);
	}
}