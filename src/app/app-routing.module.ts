import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Conor Sullivan - Home'
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Conor Sullivan - Resume'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Conor Sullivan - Contact'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Conor Sullivan - Skills'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
