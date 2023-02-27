import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
/*
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
*/
@NgModule({
  declarations: [ 
    AdminComponent,
    SidenavComponent,
    HeadernavComponent,
    HomepageComponent,
    DashboardpageComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,



    // * MATERIAL IMPORTS

    /*MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,*/


  ]
})
export class AdminModule { }
