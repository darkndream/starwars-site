import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './landing/components/notfound/notfound.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'landing', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        component: NotfoundComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }