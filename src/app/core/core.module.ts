import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {
  
}