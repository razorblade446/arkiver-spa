import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialTile} from './material-tile.component';
import {homeRouting} from './home.routing';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    MaterialTile,
  ],
  imports: [
    CommonModule,
    homeRouting,
    InfiniteScrollModule,
    RouterModule,
  ],
  providers: [
  ],
})

export class HomeModule {
}
