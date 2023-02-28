import { NgModule } from '@angular/core'; /* подключаю декоратор из ангуляр кор */
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/./product/product.componet';

@NgModule({ //настройка приложения
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //отсюда начинается приложение
})
export class AppModule { }
