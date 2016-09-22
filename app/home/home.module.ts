import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialTileComponent} from './material-tile.component';
import {homeRouting} from './home.routing';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {RouterModule} from '@angular/router';
import {HomeMenuComponent} from './home-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMenuComponent,
    MaterialTileComponent,
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
