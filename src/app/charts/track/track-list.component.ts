import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Track } from "./track";
import { TrackService } from "./track.service";

@Component({
  templateUrl: './track-list.component.html',
  styleUrls: ['../list-style.css']
})
export class TrackListComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private trackService: TrackService) { }

  _track: Track;
  routeSub: any;
  country: string;

  ngOnInit(): void {
    this.country = this.activatedRoute.snapshot.paramMap.get('country')!;
    this.routeSub = this.trackService.retrieveAll(this.country).subscribe((track) => {
      this._track = track;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  createRange(number: any){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
