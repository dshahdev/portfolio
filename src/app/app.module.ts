import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { PocOneModule } from './poc1/poc1.module';
import { ContactComponent } from './contact/contact.component';
import { Poc1Component } from './poc1/poc1.component';
import { PocService } from './poc1/poc1.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    
    ContactComponent,
    Poc1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PocOneModule,
    AppRoutingModule
  ],
  providers: [PocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
