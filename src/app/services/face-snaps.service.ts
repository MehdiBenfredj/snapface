import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
	providedIn: 'root'
})
export class FaceSnapsService {
	private faceSnaps: FaceSnap[] = [
		{
			id:1,
			title: 'Archibald',
			description: 'Mon meilleur ami depuis tout petit !',
			imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
			createdDate: new Date(),
			snaps: 422.467,
			buttonText: "Oh Snap!",
			location: 'Paris'
		},
		{
			id:2,
			title: 'Three Rock Mountain',
			description: 'Un endroit magnifique pour les randonnées.',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
			createdDate: new Date(),
			snaps: 6,
			buttonText: "Oh Snap!",
			location: 'la montagne'
		},
		{
			id:3,
			title: 'Un bon repas',
			description: 'Mmmh que c\'est bon !',
			imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
			createdDate: new Date(),
			buttonText: "Oh Snap!",
			snaps: 0
		}
	];

	getAllFaceSnaps() {
		return this.faceSnaps;
	}

	getSnapById(faceSnapId: number) {
		const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
		if(faceSnap) {
			return faceSnap;
		} else {
			throw new Error('FaceSnap not found!');
		}
	}

	snapFaceSnapById(faceSnapId: number): void {
		const faceSnap = this.getSnapById(faceSnapId);
		if (faceSnap.buttonText == "Oh Snap!") {
			faceSnap.snaps++;
			faceSnap.buttonText="Oops, unSnap!";
		} else  {
			faceSnap.snaps--;
			faceSnap.buttonText="Oh Snap!";
		}
	}
}
