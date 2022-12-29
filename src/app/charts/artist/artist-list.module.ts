import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArtistListComponent } from "./artist-list.component";

@NgModule({
  declarations: [
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'artists/:country', component: ArtistListComponent }
    ])
  ],
  exports: [
    ArtistListComponent
  ]
})
export class ArtistListModule {

}