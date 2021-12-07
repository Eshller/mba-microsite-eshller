import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainAcademicsComponent } from './main/academics/academics.component';
import { MainComponent } from './main/main.component';
import { MainCareerComponent } from './main/career/career.component';
import { MainExtracurricularsComponent } from './main/extracurriculars/extracurriculars.component';
import { MainLifestyleComponent } from './main/lifestyle/lifestyle.component';
import { MainMiscellaneousComponent } from './main/miscellaneous/miscellaneous.component';
import { MainPersonalComponent } from './main/personal/personal.component';
import { NavbarComponent } from './navbar/navbar.component';
 

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'academics', pathMatch: 'full' },
      { path: 'academics', component: MainAcademicsComponent },
      { path: 'career', component: MainCareerComponent },
      { path: 'extracurriculars', component: MainExtracurricularsComponent },
      { path: 'lifestyle', component: MainLifestyleComponent },
      { path: 'miscellaneous', component: MainMiscellaneousComponent },
      { path: 'personal', component: MainPersonalComponent }
    ]
  }
  // {path: '', redirectTo:'academics', pathMatch:'full'},
  // {path: 'academics', component: MainAcademicsComponent},
  // { path: 'career', component: MainCareerComponent },
  // { path: 'extracurriculars', component: MainExtracurricularsComponent },
  // { path: 'lifestyle', component: MainLifestyleComponent },
  // { path: 'miscellaneous', component: MainMiscellaneousComponent },
  // { path: 'personal', component: MainPersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, MainComponent, MainAcademicsComponent, MainCareerComponent, MainExtracurricularsComponent, MainLifestyleComponent, MainPersonalComponent, MainMiscellaneousComponent, NavbarComponent]
