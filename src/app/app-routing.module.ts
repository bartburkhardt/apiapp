import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiListComponent } from './api-list/api-list.component';
import { EntryListComponent } from './entry-list/entry-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: ApiListComponent },
  { path: 'category/:categoryName', component: EntryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
