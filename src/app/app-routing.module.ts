import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithIdPage } from './my-custom-page/my-custom-page-with-id/my-custom-page-with-id';
import { AnotherPage } from './another/another.page';
import { AuthenticationService } from './authentication.service';
import { CustomComponent } from './shared/custom-component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'my-custom-page',
    loadChildren: () =>
      import('./my-custom-page/my-custom-page.module').then(
        (m) => m.MyCustomPagePageModule
      ),
  },
  {
    path: 'my-custom-page/:id',
    component: MyCustomPageWithIdPage,
  },
  {
    path: 'another',
    component: AnotherPage,
    canActivate: [AuthenticationService],
  },
  {
    path: 'shared',
    component: CustomComponent,
  },
  { path: 'authentication', component: AuthenticationService },
  {
    path: 'third-custom-page',
    loadChildren: () =>
      import('./third-custom-page/third-custom-page.module').then(
        (m) => m.ThirdCustomPagePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
