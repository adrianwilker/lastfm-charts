import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Artist } from "./artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  private TracksUrl: string = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists' +
                              '&api_key=78769e93e4d6f4576ee0a1cc572f84dc&format=json&country=';
  
  retrieveAll(country: String): Observable<Artist> {
    return this.httpClient.get<Artist>(
      `${this.TracksUrl}${country}`,
      { responseType: 'json' }
    );
  }

}