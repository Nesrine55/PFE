import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { CompanynavbarComponent } from './companynavbar/companynavbar.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { DiscoverpageComponent } from './discoverpage/discoverpage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InbordingComponent } from './inbording/inbording.component';
import { MailvalidateComponent } from './mailvalidate/mailvalidate.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentsettingsComponent } from './studentsettings/studentsettings.component';

const routes: Routes = [
  {path:'inbording' , component:InbordingComponent},
  {path:'menu' , component:MenuComponent},
  {path:'nav' , component:NavComponent},
  {path:'about' , component:AboutpageComponent},
  {path:'contact' , component:ContactpageComponent},
  {path:'discover' , component:DiscoverpageComponent},
  {path:'help' , component:HelppageComponent},
  {path:'homenavbar' , component:HomenavbarComponent},
  {path:'' , component:HomepageComponent},
  {path:'mailvalidate' , component:MailvalidateComponent},
  {path:'signup' , component:SignupComponent},
  {path:'company' , component:CompanydashboardComponent},
  {path:'companynav' , component:CompanynavbarComponent},
  {path:'studentnav' , component:StudentnavbarComponent},
  {path:'signin' , component:SiginComponent},
  {path:'studentsettings' , component:StudentsettingsComponent},
  {path:'studentprofile' , component:StudentprofileComponent},
  {path:'navbar' , component:NavbarComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
