import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { CategoryProjectComponent } from './pages/category-project/category-project.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SingleProjectComponent,
    AllProjectsComponent,
    CategoryProjectComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'work/:category/:id', component: SingleProjectComponent},
    	{ path: 'work/:category', component: CategoryProjectComponent},
      { path: 'work', component: AllProjectsComponent },
      { path: 'about', component: AboutComponent },
    	{ path: '**', component: NotFoundComponent }
    ],
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
