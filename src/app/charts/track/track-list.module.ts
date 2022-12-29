import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TrackListComponent } from "./track-list.component";

@NgModule({
  declarations: [
    TrackListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'tracks/:country', component: TrackListComponent }
    ])
  ],
  exports: [
    TrackListComponent
  ]
})
export class TrackListModule {

}