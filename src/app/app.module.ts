import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TrackListModule } from './charts/track/track-list.module';
import { RouterModule } from '@angular/router';
import { ArtistListModule } from './charts/artist/artist-list.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    TrackListModule,
    ArtistListModule,
    RouterModule.forRoot([
      { path: 'tracks', component: IndexComponent },
      { path: 'artists', component: IndexComponent },
      { path: '', component: IndexComponent, pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
