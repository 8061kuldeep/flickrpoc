import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListimageComponent } from './components/listimage/listimage.component';
import { ViewimageComponent } from './components/viewimage/viewimage.component';

const routes: Routes = [
  {
    path: 'viewImage/:id',
    component: ViewimageComponent,
  },
  {
    path: '',
    component: ListimageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
