import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal/legal.component';
import { ContentPageComponent } from './content-page/content-page.component';

const routes: Routes = [
  {path: '', component: ContentPageComponent},
  {path: 'legal', component: LegalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
