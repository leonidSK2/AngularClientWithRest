import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Page404Component } from './components/page404/page404.component';
import { CompanyComponent } from './components/company/company.component';
import { Customer2Component } from './components/customer2/customer2.component';
import { CouponComponent } from './components/coupon/coupon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'login', component: LoginComponent },
  { path:'contactus', component: ContactUsComponent },
  { path:'company', component: CompanyComponent },
  { path:'customer2', component: Customer2Component },
  { path:'coupon', component: CouponComponent },
  { path:'', component: HomeComponent }, // empty route will show home
  { path:'**', component: Page404Component } // all other routes will display 404Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
