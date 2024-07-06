import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./components/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./components/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'destinations',
    loadChildren: () =>
      import('./components/destinations/destinations.module').then(
        (m) => m.DestinationsModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./components/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
