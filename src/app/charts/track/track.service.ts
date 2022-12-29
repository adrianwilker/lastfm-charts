import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { Track } from "./track";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private httpClient: HttpClient) { }

  private TracksUrl: string = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks' +
                              '&api_key=78769e93e4d6f4576ee0a1cc572f84dc&format=json&country=';

  retrieveAll(country: String): Observable<Track> {
    return this.httpClient.get<Track>(
      `${this.TracksUrl}${country}`,
      { responseType: 'json' }
    );
  }
  
}