import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';

import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {HttpClientModule} from '@angular/common/http';

// 1. configure the routes

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

// module is a collection of components, pipes, directives
// + services 
// module contains reference to other modules


// angular needs at least one module

@NgModule({
    imports: [
        // other module dependencies
        BrowserModule,
        FormsModule,
        SharedModule,
        CartModule,
        ProductModule,
        // 2. apply the routes to angular module
        RouterModule.forRoot(routes),
        HttpClientModule
    ],

    declarations: [
        // component, directive and pipes to be registered here
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        CounterComponent,
        ContactComponent,
        NotFoundComponent 
        //HeaderComponent,
        // FooterComponent, etc
    ],

    // includes only top level component
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
