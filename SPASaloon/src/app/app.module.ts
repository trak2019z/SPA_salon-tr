import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { ContentComponent } from './main-layout/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { OffersComponent } from './offers/offers.component';
import { OfferNewComponent } from './offers/offer-new/offer-new.component';
import { OfferClientViewComponent } from './offers/offer-client-view/offer-client-view.component';
import { GlobalTermsComponent } from './global-terms/global-terms.component';
import { GlobalTermNewComponent } from './global-terms/global-term-new/global-term-new.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RolesComponent } from './roles/roles.component';
import { RoleNewComponent } from './roles/role-new/role-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    OffersComponent,
    OfferNewComponent,
    OfferClientViewComponent,
    GlobalTermsComponent,
    GlobalTermNewComponent,
    HomeComponent,
    LoginComponent,
    RolesComponent,
    RoleNewComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OfferNewComponent]
})
export class AppModule { }