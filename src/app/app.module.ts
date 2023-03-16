import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbordingComponent } from './inbording/inbording.component';
import { NavComponent } from './nav/nav.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { DiscoverpageComponent } from './discoverpage/discoverpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { MailvalidateComponent } from './mailvalidate/mailvalidate.component';
import { StudentsettingsComponent } from './studentsettings/studentsettings.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanynavbarComponent } from './companynavbar/companynavbar.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InbordingComponent,
    HomenavbarComponent,
    SignupComponent,
    SiginComponent,
    HomepageComponent,
    HelppageComponent,
    AboutpageComponent,
    DiscoverpageComponent,
    ContactpageComponent,
    MailvalidateComponent,
    StudentsettingsComponent,
    CompanydashboardComponent,
    CompanynavbarComponent,
    StudentnavbarComponent,
    StudentprofileComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
   /* BrowserAnimationsModule,*/
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
