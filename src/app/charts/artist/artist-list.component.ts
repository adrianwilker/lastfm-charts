import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Artist } from "./artist";
import { ArtistService } from "./artist.service";

@Component({
  templateUrl: 'artist-list.component.html',
  styleUrls: ['../list-style.css']
})
export class ArtistListComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) {}

  _artist!: Artist;
  routeSub: any;
  country!: string;

  ngOnInit(): void {
    this.country = this.activatedRoute.snapshot.paramMap.get('country')!;
    this.routeSub = this.artistService.retrieveAll(this.country).subscribe(
      (artist) => {
        this._artist = artist;
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  createRange(number: any){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

}