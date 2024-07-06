import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CarouselModule],
  declarations: [ServicesComponent],
})
export class ServicesModule {}
