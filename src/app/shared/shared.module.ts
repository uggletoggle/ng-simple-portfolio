import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        BannerComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        BannerComponent,
        FooterComponent
    ],
    providers: [],
})
export class SharedModule { }
