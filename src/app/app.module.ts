import { NgModule,Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GithubIssue, GithubApi } from './models/models'
import { merge, Observable, of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyInterceptor } from './interceptor';



@Injectable({ providedIn: 'root' })
export class MyResolve implements Resolve<GithubIssue> {
  constructor(private http: HttpClient) { }
  private url = 'https://api.github.com/repos/angular/angular/issues'

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.http.get<any>(`${this.url}/${route.paramMap.get('id')}`);
  }
}

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/:id',
    component: DetailComponent,
     resolve: {
          detail: MyResolve
        }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    MatToolbarModule,

    HomeModule,
    ListModule,
    DetailModule
  ],
 providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
