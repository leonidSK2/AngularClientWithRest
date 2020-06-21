import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Page404Component } from './components/page404/page404.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { CompanyComponent } from './components/company/company.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { Customer2Component } from './components/customer2/customer2.component';
import { CouponComponent } from './components/coupon/coupon.component';

@NgModule({
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, AboutComponent, ContactUsComponent, Page404Component, ThumbnailComponent, CompanyComponent, LoginComponent, Customer2Component, CouponComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent, CompanyComponent, Customer2Component]
})
export class AppModule { }
