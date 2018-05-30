import { Component, OnInit } from '@angular/core';
import {VideoListService} from "../video-list.service";

@Component({
	selector: 'app-my-list',
	templateUrl: './my-list.component.html',
	styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit
{
	constructor(private videoList: VideoListService)
	{
	}

	ngOnInit()
	{
	}

}
