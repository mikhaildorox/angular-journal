import { NgModule } from '@angular/core'; /* подключаю декоратор из ангуляр кор */
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.componet';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({ //настройка приложения
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //отсюда начинается приложение
})
export class AppModule { }
