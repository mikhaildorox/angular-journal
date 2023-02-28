import { Component } from '@angular/core'; //импорт декоратора компонент
import { IProduct } from './models/product';
import { products as data } from './data/products'

@Component({ //его настройки
  selector: 'app-root', //назкание компонента для шаблона. использовать как тег в index.html
  templateUrl: './app.component.html', //ссылка на шаблон
  styleUrls: ['./app.component.scss'] //ссылка на стили
})

export class AppComponent {
  title = 'angular journal';

  products: IProduct[] = data //добавил компонент в шаблон
}
