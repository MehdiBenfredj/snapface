import {Component, OnInit} from '@angular/core';
import {FaceSnapsService} from "../services/face-snaps.service";
import {FaceSnap} from "../models/face-snap.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
	faceSnap!: FaceSnap;
  	constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
	}



	ngOnInit() {
		const snapId = +this.route.snapshot.params['id'];
		this.faceSnap = this.faceSnapsService.getSnapById(snapId);
	}
	onSnap() {
		this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
	}



}
