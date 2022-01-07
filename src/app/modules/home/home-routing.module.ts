import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "@modules/home/pages/home-page/home-page.component";

const routes: Routes = [
  {path: 'tracks', loadChildren: () => import("@modules/tracks/tracks.module").then(m => m.TracksModule)},
  {path: 'history', loadChildren: () => import("@modules/history/history.module").then(m => m.HistoryModule)},
  {path: 'favorites', loadChildren: () => import("@modules/favorites/favorites.module").then(m => m.FavoritesModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
