import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {}
