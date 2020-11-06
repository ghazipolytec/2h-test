import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tickets'
    },
    {
        path: 'tickets',
        component: ListComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: '**',
        redirectTo: '/tickets'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }