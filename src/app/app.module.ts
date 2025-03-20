import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './components/header/header.component';
import {ContainerComponent} from './components/container/container.component';
import {SearchComponent} from './components/container/search/search.component';
import {FormsModule} from "@angular/forms";
import {ProductListComponent} from './components/container/product-list/product-list.component';
import {TopBarComponent} from './components/header/top-bar/top-bar.component';
import {NavComponent} from './components/header/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import {ProductComponent} from './components/container/product-list/product/product.component';
import {FilterComponent} from './components/container/product-list/filter/filter.component';
import {ProductModalComponent} from './components/container/product-modal/product-modal.component';
import {LatestArrivalsComponent} from './components/container/latest-arrivals/latest-arrivals.component';
import {
    FeatureProductCardComponent
} from './components/container/latest-arrivals/feature-product-card/feature-product-card.component';
import {BackgroundDirective} from './directives/background.directive';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContainerComponent,
        SearchComponent,
        ProductListComponent,
        TopBarComponent,
        NavComponent,
        ProductComponent,
        FilterComponent,
        ProductModalComponent,
        LatestArrivalsComponent,
        FeatureProductCardComponent,
        BackgroundDirective,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgOptimizedImage,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
